FROM node:20-alpine

WORKDIR /usr/src/app

# Copy dependency files ke container
COPY package*.json ./

# Install dependencies ke development environment
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
