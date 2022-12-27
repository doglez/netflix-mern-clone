FROM node:18.12.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY tsconfig*.son ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build
RUN npm run copy-files

CMD [ "npm","start" ]

# To build a image
# docker build . -t dogflix-api-prod