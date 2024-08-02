FROM node:20

WORKDIR /usr/src/api-express-auth

COPY package*.json ./

RUN npm install

EXPOSE 3000
