FROM node:16

RUN mkdir -p /app

WORKDIR /app

COPY ./app /app

EXPOSE 80

RUN npm install

RUN npm run build

CMD [ "npm", "run", "start" ]