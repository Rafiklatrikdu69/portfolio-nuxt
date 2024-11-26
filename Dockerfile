FROM node:20-alpine 
WORKDIR /app
COPY . .
CMD ["node",".output/server/index.mjs"]
EXPOSE 3000