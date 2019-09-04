FROM ruby:2.5.1

# Set me as maintainer
LABEL maintainer="Benjamin Carlier <bcarlier@student.42.fr>"

# Download and install
RUN		apt-get update -y && apt-get install -y build-essential libpq-dev nodejs sqlite3 && apt-get clean autoclean && apt-get autoremove -y

ONBUILD COPY app /opt/app
ONBUILD WORKDIR /opt/app

ONBUILD EXPOSE 3000
ONBUILD RUN bundle install
ONBUILD RUN rake db:migrate
ONBUILD RUN rake db:seed

# To build : docker build -t ft-rails:on-build .
