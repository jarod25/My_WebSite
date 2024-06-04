FROM node:latest as build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

# FROM nginx:latest

# WORKDIR /usr/share/nginx/html
# RUN rm -rf *
# COPY --from=build /app/build/ .
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf


# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]