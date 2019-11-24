FROM node:9-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY database.db .

RUN chmod 666 database.db
RUN npm install

COPY index.js .

EXPOSE 8080

CMD npm start