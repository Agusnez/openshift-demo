FROM node:9-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY database.db .

RUN npm install

COPY index.js .

EXPOSE 8080

CMD npm start