FROM node:24-alpine

ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV
WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/ 

# 1. Install dependencies
RUN npm install

# 2. Generate Prisma Client (PENTING)
RUN npx prisma generate

COPY . .

# 3. Build TypeScript ke JavaScript
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]