FROM node:20

RUN useradd -ms /bin/bash yellow

WORKDIR /home/yellow/code

USER yellow

COPY index.js .

CMD ["node", "index.js"]