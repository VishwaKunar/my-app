const http = require('http');

const server = http.createServer((req, res) => {
  res.write("FINAL WORKING PIPELINE ");
  res.end();
});

server.listen(3000);
