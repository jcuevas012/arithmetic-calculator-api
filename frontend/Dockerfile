
 

# Install dependencies only when needed
FROM node:16-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

# copy pacakge
COPY package.json  ./

RUN npm install 

COPY . .

#expose port to the host
EXPOSE  3000

RUN npm run build 

CMD ["npm", "run", "start"]
