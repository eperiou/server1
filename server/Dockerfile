FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /user/src/app
RUN npm install
RUN nodal db:bootstrap && npm run startdb && nodal s
COPY . /usr/src/app

EXPOSE 3000
