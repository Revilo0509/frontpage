FROM ghcr.io/pnpm/pnpm:12 AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .
RUN pnpm ci

COPY . .
RUN pnpm generate

FROM docker.io/nginx:1.31-alpine AS app
RUN mkdir /app
COPY --from=builder /app/.output/public /app
COPY nginx.conf /etc/nginx/nginx.conf
