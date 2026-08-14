# Intro to Containers Notes

This repository contains a basic Node.js HTTP server and Docker-related notes.

## Current app behavior

The server in [basic/index.js](basic/index.js) starts an HTTP server on port 3000 and returns the response `omg hi`.

```js
const http = require("http");

http
  .createServer(function (request, response) {
    console.log("request received");
    response.end("omg hi", "utf-8");
  })
  .listen(3000);
console.log("server started");
```

## Docker build command

The repository is built with:

```sh
docker build -t basic-node:2 .
```

This command builds an image from the current directory using the Dockerfile in the workspace and tags it as `basic-node:2`.

## Docker run command

The file includes this command as a comment:

```sh
docker run --init --publish 3000:3000 --rm --name nodeApp basic-node:2
```

What each flag means:

- `docker run` - starts a new container from an image
- `--init` - runs an init process inside the container for better process management
- `--publish 3000:3000` - maps host port 3000 to container port 3000
- `--rm` - removes the container automatically when it exits
- `--name nodeApp` - assigns the container the name `nodeApp`
- `basic-node:2` - the image name and tag used to start the container

The command therefore starts the `basic-node:2` container, exposes port 3000, gives it the name `nodeApp`, and removes it automatically when stopped.
