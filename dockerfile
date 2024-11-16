FROM node:20

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install

COPY . .

RUN pnpm run prepare

EXPOSE 3000

CMD ["pnpm", "run", "dev"]
