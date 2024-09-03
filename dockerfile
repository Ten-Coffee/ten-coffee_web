FROM node:20

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

RUN npm install

COPY . .

RUN npm run prepare

EXPOSE 3000

CMD ["pnpm", "run", "dev"]
