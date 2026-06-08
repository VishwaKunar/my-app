const http = require('http');

const server = http.createServer((req, res) => {
  res.write("PIPELINE FINAL DONE 🚀");
  res.end();
});

server.listen(3000);
