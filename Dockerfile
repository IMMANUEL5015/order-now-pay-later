FROM node:18

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

COPY . .

EXPOSE 8080

CMD ["npm", "start"]