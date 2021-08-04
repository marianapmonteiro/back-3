FROM node:16-buster

WORKDIR /usr/src/app

RUN apt-get update && apt-get -y upgrade

COPY . .
# 1. Criar a imagem: docker build -t back .
# 2. Rodar o container:  docker run --rm -it --name meu-container -v ${pwd}:/usr/src/app bash