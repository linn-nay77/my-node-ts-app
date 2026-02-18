# Multi-stage Dockerfile for a Node.js + TypeScript app
# Builds the app in a builder image then produces a slim runtime image

### Builder
FROM node:18-alpine AS builder
WORKDIR /app

# Install build tools
RUN apk add --no-cache python3 make g++

# Install deps based on package manifest first to take advantage of caching
COPY package*.json ./
RUN npm ci

# Copy source files and run build
COPY . .
RUN npm run build

### Runtime
FROM node:18-alpine
WORKDIR /app

ENV NODE_ENV=production

# Create non-root user
RUN addgroup -S app && adduser -S app -G app

# Copy package files and install only production deps
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production

# Copy built output
COPY --from=builder /app/dist ./dist

USER app

# Default command: run the compiled entrypoint
CMD ["node", "dist/app.js"]

