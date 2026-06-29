FROM oven/bun:1-alpine AS builder
WORKDIR /app
COPY . .
RUN bun install
ENV NITRO_PRESET=static
RUN bun run build

FROM nginx:alpine
COPY --from=builder /app/.output/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
