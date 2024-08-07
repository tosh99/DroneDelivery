FROM node:22

RUN mkdir -p /app
WORKDIR /app

RUN npm i -g pnpm
RUN npm i -g serve

COPY package.json ./
RUN pnpm i

COPY . .

RUN pnpm run build

CMD ["serve", "-p", "3007", "dist"]
