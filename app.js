const http = require('http');

const server = http.createServer((req, res) => {
  res.write("Hello from GCP CI/CD 🚀");
  res.end();
});

server.listen(3000);
