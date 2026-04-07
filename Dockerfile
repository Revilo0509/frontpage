FROM node:24-alpine AS build-stage
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && \
    corepack install
RUN pnpm install --frozen-lockfile
COPY ./ .
RUN pnpm run build

FROM nginx:1.29-alpine AS production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
