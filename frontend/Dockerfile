FROM node:16-alpine

ARG API_HOST=localhost:8000

WORKDIR /app

COPY package.json .

RUN npm i --omit=dev

COPY . .

ENV API_HOST ${API_HOST}

RUN npm run build

EXPOSE 3000

ENV NODE_ENV production

CMD [ "npm", "run", "start" ]
