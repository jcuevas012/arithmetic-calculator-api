FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

RUN  npm run build

EXPOSE 3000
CMD [ "npm", "run", "start" ]