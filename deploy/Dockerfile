FROM node:12.0-alpine as builder

WORKDIR /usr/src/app

COPY . .

# addtional packages for compile
RUN apk update
RUN apk add --update \
    bash \
    lcms2-dev \
    libpng-dev \
    gcc \
    g++ \
    make \
    autoconf \
    automake \
    python

ENV PARCEL_WORKERS=1

RUN yarn install
RUN yarn build

FROM nginx:stable-alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
