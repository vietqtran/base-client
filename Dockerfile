FROM node:18-alpine

WORKDIR /website

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000