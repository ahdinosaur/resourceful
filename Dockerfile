FROM mhart/alpine-node:8

RUN apk add --no-cache git

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet

COPY . .

ENV PATH="/usr/app/node_modules/.bin:${PATH}"

EXPOSE 3000

CMD ["node", "index.js"]
