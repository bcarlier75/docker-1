FROM node

LABEL maintainer="Benjamin Carlier <bcarlier@student.42.fr>"

WORKDIR /var/www/app

RUN	apt-get update && apt-get upgrade -y && apt-get install -y apt-transport-https && \
	curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
	echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
	apt-get update && apt-get install -y yarn

COPY mycode /var/www/app

RUN yarn

EXPOSE 3000

CMD ["node","index.js"]

# To build : docker build -t nodejswyarn .
# To run : docker run -d --name njs -p 3000:3000 nodejswyarn
