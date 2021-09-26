FROM node:lts-alpine

RUN npm install -g serve

WORKDIR /app

COPY package*.json ./

RUN npm install react-scripts

COPY . .

RUN serve -s build -p 8000

