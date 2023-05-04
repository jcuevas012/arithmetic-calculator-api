FROM node:18
# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .


RUN  npm run build


ENV NODE_ENV production

EXPOSE 80

CMD [ "npm", "run", "start" ]