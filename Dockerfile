# --- Stage 1: Build ---
FROM node:20.13.1 AS builder

WORKDIR /src

# Copy and install dependencies
COPY package.json package-lock.json ./
RUN yarn install

# Copy the rest of the app
COPY . .

# Build Next.js app
RUN yarn build

# --- Stage 2: Production runner ---
FROM node:20.13.1 AS runner

WORKDIR /src

ENV NODE_ENV production

# Only copy necessary files
COPY --from=builder /src/public ./public
COPY --from=builder /src/.next ./.next
COPY --from=builder /src/node_modules ./node_modules
COPY --from=builder /src/package.json ./package.json

EXPOSE 3000

CMD ["yarn", "start"]
