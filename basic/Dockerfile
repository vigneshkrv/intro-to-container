FROM node:20

RUN useradd -ms /bin/bash yellow

WORKDIR /home/yellow/code

COPY . .

RUN chown -R yellow:yellow /home/yellow/code

USER yellow

RUN npm ci

CMD ["node", "index.js"]