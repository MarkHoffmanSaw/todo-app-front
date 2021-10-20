FROM node:16-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
COPY package.json ./
COPY package-lock.json ./
RUN npm install
CMD ["npm", "start"]