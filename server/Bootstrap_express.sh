#!/bin/bash

# Initializae npm project
npm ini -y

# Initialize git project 
# git init

# Create all forlders
mkdir src _data src/config src/controllers src/database src/middleware src/models src/public src/routes src/utilis

# Install modules
npm install bcryptjs colors cookie-parser cors dotenv express express-mongo-sanitize express-rate-limit helmet hpp jsonwebtoken mongoose morgan nodemailer slugify xss-clean

npm i -D nodemon

# Se corre con el siguiente script
# bash Bootstrap_express.sh
