FROM debian

# Set me as maintainer
LABEL maintainer="bcarlier@student.42.fr"

# Accept TS license
ENV TS3SERVER_LICENSE=accept

# Download and install
RUN		apt-get update -y			&& \
		apt-get upgrade -y			&& \
		apt-get install -y bzip2 wget -y	&& \
		apt-get autoremove -y			&& \
		apt-get clean				&& \
		wget https://files.teamspeak-services.com/releases/server/3.7.0/teamspeak3-server_linux_amd64-3.7.0.tar.bz2 && \
		tar xvf *.tar.bz2

# Open necessary ports
# 9987 udp = virtual voice server use this port
# 30033 tcp = file transfert use this port
# 10011 tcp = server query is listening to this port
EXPOSE 9987/udp 30033 10011

# Set working directory and entry point
WORKDIR teamspeak3-server_linux_amd64
ENTRYPOINT sh ts3server_minimal_runscript.sh

# To build use the following command : docker build -t ts3_img .
# To run use the following command : docker run -d --restart=unless-stopped --name=Server_benji -p 9987:9987/udp -p 10011:10011 -p 30033:30033 ts3_img
