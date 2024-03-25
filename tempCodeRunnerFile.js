const http = require('http');

const server = http.createServer((req,les) =>{
    console.log('Request Raised');
});

server.listen(3000, 'localhost', () => //IP ADRESS OF LOCAL HOST - 127.0.0.1
{
    console.log('Listening on port 3000');
});
