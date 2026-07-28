FROM node:26-alpine AS dependencies
WORKDIR /app
COPY package*.json .
RUN npm ci

FROM dependencies AS build
COPY . .
RUN npm run build

FROM nginx:1.31-alpine AS app
RUN mkdir /app
COPY --from=build /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
