# Stage 1: Build the application
FROM node:21.7.3 AS builder

# Set working directory
WORKDIR /app

# Copy package management files first for caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN npm install -g pnpm \
    && pnpm install

# Copy the rest of the application code
COPY . /app/

# Build the Next.js application
RUN pnpm run build
