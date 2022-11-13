# builder
FROM node:18.6.0-alpine as builder

WORKDIR /viewer

COPY . .

RUN npm ci

RUN npm run build

# runner
FROM node:18.6.0-alpine

WORKDIR /viewer

COPY --from=builder /viewer/build out

RUN npm install -g serve

CMD ["serve", "-s", "out", "-l", "8080"]