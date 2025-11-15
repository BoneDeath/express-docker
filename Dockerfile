FROM node:20-alpine AS builder
WORKDIR /usr/src/app

# Install deps
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /usr/src/app

# Copy only needed files
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000

CMD ["npm", "start"]