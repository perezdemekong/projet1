# This defines our starting point
FROM node:16.19.1

RUN mkdir -p /usr/src/app 
 
WORKDIR /usr/src/app

RUN npm install -g npm@9.5.0

RUN npm install -g @angular/cli@14.2.0

COPY . .
