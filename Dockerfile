FROM nginx:1.15.4-alpine

ENV NODE_ENV=production
ENV PORT=3700

COPY nginx/nginx.conf /etc/nginx/nginx.conf

WORKDIR /var/www

COPY build/ .

EXPOSE $PORT