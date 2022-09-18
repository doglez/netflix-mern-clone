#!/bin/bash
## React TS
# Initialize ReactJS
npx create-react-app client --template typescript
cd client

npm install @mui/material @emotion/react @emotion/styled @mui/icons-material normalize.css react-router-dom axios jwt-decode react-redux @reduxjs/toolkit redux-thunk yup yup-password @hookform/resolvers react-hook-form

# File cleaning
rm -rf public/logo192.png public/logo512.png public/manifest.json public/robots.txt src/App.css src/App.test.tsx src/index.css src/logo.svg src/react-app-env.d.ts src/reportWebVitals.ts src/setupTests.ts

# Add .env
touch .env
touch .env.example

# Modify .gitignore
echo ".env" >> .gitignore

mv .gitignore ../

cd ..


## Express TS
# Initializae Express project
mkdir server
cd server
npm init -y
tsc --init

npm install bcryptjs colors cookie-parser cors dotenv express express-mongo-sanitize express-rate-limit helmet hpp jsonwebtoken mongoose morgan nodemailer

npm -D install typescript ts-node-dev @types/bcryptjs @types/colors @types/cookie-parser @types/cors @types/dotenv @types/express @types/hpp @types/jsonwebtoken @types/morgan @types/nodemailer

mkdir src _data src/config src/controllers src/database src/middleware src/models src/public src/routes src/utilis
touch src/index.ts

# Add .env
touch dev.env
touch example.env
touch prod.env

# Se corre con el siguiente script
# bash Bootstrap_MERN.sh
