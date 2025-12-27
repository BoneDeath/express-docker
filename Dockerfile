FROM node:24-alpine

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate

RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

EXPOSE 3000

CMD sh -c "\
  if [ \"$NODE_ENV\" = \"development\" ]; then \
    npm run dev; \
  else \
    npm run start; \
  fi"
