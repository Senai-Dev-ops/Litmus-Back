FROM node:16

# Create app directory
WORKDIR /usr/src/sdb_be

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

RUN npx sequelize db:seed:all
CMD [ "node", "src/index.js" ]

# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/