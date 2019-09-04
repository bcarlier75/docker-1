FROM ubuntu:18.04

# Set me as maintainer
LABEL maintainer="Benjamin Carlier <bcarlier@student.42.fr>"

# Download and install
RUN	apt-get update && \
	apt-get upgrade -y && \
	apt-get install -y wget openssh-server ca-certificates postfix vim && \
	wget https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh && chmod 777 script.deb.sh && ./script.deb.sh && apt-get install -y gitlab-ce

RUN 	apt update && apt install -y tzdata && \
		apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Open necessary ports : hhtps, http and ssh
EXPOSE 443 80 22

ENTRYPOINT (/opt/gitlab/embedded/bin/runsvdir-start &) && gitlab-ctl reconfigure && tail -f /dev/null

# To build : docker build -t gtlce .
# To run : docker run -d --name gitlab -p 80:80 -p 443:443 -p1993:22 gtlce
# To do after : setup hhtps and ssh connection
