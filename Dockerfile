FROM node:18
WORKDIR /usr/src/app.
COPY . .

RUN cd blog_dz && npm i 
RUN cd blog_dz && npm run build

RUN cd server && npm i

EXPOSE 3001


CMD ["node", "server/app.js"]