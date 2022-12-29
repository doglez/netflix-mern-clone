FROM node:18.12.1-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build
RUN npm run copy-files

RUN rm -rf ./src tsconfig*.json .dockerignore Dockerfile package-lock.json

CMD [ "npm","start" ]

# To build a image
# docker build . -t dogflix-api-prod