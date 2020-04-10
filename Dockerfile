#FROM node:9.11.1-alpine
#FROM node:10.16.0-alpine
FROM node:12.2.0-alpine as build

LABEL author="Suchat Sujalarnlap"

# install simple http server for serving static content
#RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install
RUN npm install @vue/cli@4.2.3 -g

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

#EXPOSE 8081

ENV TZ=Asia/Bangkok
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Start App
#CMD [ "http-server", "dist" ]
#CMD ["npm", "run", "serve"]

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
