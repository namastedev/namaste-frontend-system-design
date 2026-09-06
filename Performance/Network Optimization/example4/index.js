const express = require("express");
const spdy = require('spdy');
const fs = require("fs");

// We are using HTTP/2 instead of HTTP/1.1, because HTTP/2 is faster than HTTP/1.1
// HTTP/2 supports multiplexing, which allows multiple requests to be sent and received at the same time
// Multiple requests can be sent and received at the same time, which can reduce the time it takes to load a page
// In HTTP/1.1, only 6-8 requests can be sent at a time


const PORT = 3010;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log(req.url);
    res.sendFile(__dirname + '/index.html');
});

const CERT_DIR = `${__dirname}/cert`;

// To run on HTTP/1.1 comment the below code
// We need to create certificates for HTTP/2, to tun on https
const server = spdy.createServer(
    {
      key: fs.readFileSync(`${CERT_DIR}/server.key`),
      cert: fs.readFileSync(`${CERT_DIR}/server.cert`),
    },
    app
  );

// To run on HTTP/1.1 comment the below code
server.listen(PORT, () => {
  // HTTP/2 runs on https only
    console.log(`Server started at https://localhost:${PORT}`);
});

// To run on HTTP/1.1 uncomment the below code
// app.listen(PORT, () => {
//     console.log(`Server started at http://localhost:${PORT}`);
// });







