FROM alpine

LABEL maintainer="Benjamin Carlier <bcarlier@student.42.fr>"

RUN apk add --update nodejs nodejs-npm

COPY src /src

WORKDIR /src

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]

# To build : docker build -t asteroids .
# To run : docker run -d --name astr -p 3000:3000 asteroids
