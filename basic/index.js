const http = require("http");

http
  .createServer(function (request, response) {
    console.log("request received");
    response.end("omg hi", "utf-8");
  })
  .listen(3000);
console.log("server started");

//docker build -t basic-node:2 .
// docker run --init --publish 3000:3000 --rm --name nodeApp basic-node:2
