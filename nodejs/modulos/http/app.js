const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'content-type' : 'text/plain'});
    res.end('HAAAAAAAAAAI');
}).listen(8080)