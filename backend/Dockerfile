FROM node:latest

WORKDIR /src/app/
COPY package*.json ./
RUN npm i
COPY . .

EXPOSE 5000
RUN npm run build

CMD ["npm", "start"]