const http = require('http');

const hostname = '127.0.0.1';

const port = '8080';

const server = http.createServer((req, res) => {
  res.end('Hello from our Node server');
});

server.listen(port, hostname, () => {
  console.log('Server Running');
});

