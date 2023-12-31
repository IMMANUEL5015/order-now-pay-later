FROM node:18

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate

COPY . .

EXPOSE 8080