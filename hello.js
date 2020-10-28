var http = require('http');
http.createServer(function (req, res) {
	 res.end('Hello Continuouse Integration team CSC480\n');
  res.end('Hello Travis!\n');
	//add testing
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
