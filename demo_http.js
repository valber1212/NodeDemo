var http = require('http');

//create a server object
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); // add header
    res.write('Salve Palestra...') // write a response for the client
    res.end(); // end the response
}).listen(8080);

