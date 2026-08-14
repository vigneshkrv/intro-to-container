FROM node:20

RUN useradd -ms /bin/bash yellow

USER yellow

COPY index.js /home/yellow/code/index.js

CMD ["node", "/home/yellow/code/index.js"]