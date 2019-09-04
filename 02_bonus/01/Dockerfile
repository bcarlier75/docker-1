FROM debian

LABEL maintainer="Benjamin Carlier <bcarlier@student.42.fr>"

RUN apt-get update && apt-get upgrade -y && apt-get install -y wget default-jre

WORKDIR minecraft

RUN wget https://launcher.mojang.com/v1/objects/3737db93722a9e39eeada7c27e7aca28b144ffa7/server.jar

RUN echo 'eula=true' > eula.txt

EXPOSE 25565

ENTRYPOINT java -Xmx2048M -Xms2048M -jar server.jar

# To build : docker build -t minecraft .
# To run : docker run -it -d --name minecraft-server -p 25565:25565 minecraft
