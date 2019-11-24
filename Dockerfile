FROM node:9-alpine

WORKDIR /app

ADD build build/
COPY package.json .
COPY package-lock.json .

RUN npm install

COPY index.js .

EXPOSE 8080

CMD npm start