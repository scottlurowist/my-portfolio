FROM node:14-alpine as react-build

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=react-build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]