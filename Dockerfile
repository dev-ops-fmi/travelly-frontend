FROM node:20-alpine AS build

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist/travelly-frontend/ /usr/share/nginx/html
COPY --from=build /app/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80