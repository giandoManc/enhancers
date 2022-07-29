FROM node:12.16.1 AS builder
WORKDIR /usr/app
COPY . .
COPY package.json ./
RUN npm i
CMD npm run dev
EXPOSE 3000

