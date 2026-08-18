FROM node:20

USER node

WORKDIR /home/node/code

COPY --chown=node . .

RUN npm ci

CMD ["node", "index.js"]