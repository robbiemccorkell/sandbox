FROM node:4.1

# grab gosu for easy step-down from root
RUN gpg --keyserver pool.sks-keyservers.net --recv-keys B42F6819007F00F88E364FD4036A9C25BF357DD4
RUN curl -o /usr/local/bin/gosu -SL "https://github.com/tianon/gosu/releases/download/1.2/gosu-$(dpkg --print-architecture)" \
	&& curl -o /usr/local/bin/gosu.asc -SL "https://github.com/tianon/gosu/releases/download/1.2/gosu-$(dpkg --print-architecture).asc" \
	&& gpg --verify /usr/local/bin/gosu.asc \
	&& rm /usr/local/bin/gosu.asc \
	&& chmod +x /usr/local/bin/gosu

ENV HOME /home/app
ENV APP_DIR $HOME/src

RUN groupadd -r app && useradd -rmg app app
RUN chown -R app:app $HOME

WORKDIR $APP_DIR

COPY package.json $APP_DIR/
RUN npm install --silent --production

COPY . $APP_DIR/

EXPOSE 3000

CMD ["node", "index.js"]
