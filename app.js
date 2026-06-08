const http = require('http');

const server = http.createServer((req, res) => {
  res.write("TRIGGER FIXED 🚀");
  res.end();
});

server.listen(3000);
