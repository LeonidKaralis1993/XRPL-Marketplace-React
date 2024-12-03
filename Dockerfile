# build stage
FROM node:lts-alpine

ENV REACT_APP_SERVER_URL=http://0.0.0.0:8000/api/v1

WORKDIR /app

COPY package.json  ./
COPY ./src ./src
COPY ./public ./public

RUN npm install

# production stage
CMD ["npm", "start"]