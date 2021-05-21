FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm i --only=prod && npm run build

CMD npm start 