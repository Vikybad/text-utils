FROM node:alpine

WORKDIR /var/app

COPY package.json .
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]

