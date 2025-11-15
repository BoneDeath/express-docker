# ============================
# 1) BUILDER STAGE (WITH DEV DEPS)
# ============================
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Install all dependencies (including dev)
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build the project (requires devDependencies)
RUN npm run build


# ============================
# 2) PRODUCTION DEPS STAGE
# ============================
FROM node:20-alpine AS proddeps

WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies tanpa devDependencies
RUN npm ci --omit=dev


# ============================
# 3) FINAL PRODUCTION IMAGE
# ============================
FROM node:20-alpine

WORKDIR /usr/src/app

# Copy production node_modules
COPY --from=proddeps /usr/src/app/node_modules ./node_modules

# Copy dist output
COPY --from=builder /usr/src/app/dist ./dist

# Copy package.json if needed
COPY package*.json ./

EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "start"]