FROM node:9.2.0-slim
ENV INSTALL_PATH /pontoclient
RUN npm install -g @angular/cli
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY . .
RUN npm install
CMD ["npm", "start"]
