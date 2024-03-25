// const http = require('http');

// const server = http.createServer((req,les) =>{
//     console.log('Request Raised');
// });

// server.listen(3000, 'localhost', () => //IP ADRESS OF LOCAL HOST - 127.0.0.1
// {
//     console.log('Listening on port 3000');
// });


// //Request and repsonse from server 

// const http = require('http');

// const server = http.createServer((req,res) =>{
//     console.log(req);

// server.listen(3000, 'localhost', () => //IP ADRESS OF LOCAL HOST - 127.0.0.1
// {
//     console.log('Listening on port 3000');
// });

// res.write('<p>Hello Hemanth!</p>');
// res.end();
// });
// server.listen(3000, 'localhost', () => //IP ADRESS OF LOCAL HOST - 127.0.0.1
// {
//     console.log('Listening on port 3000');
// });


const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);

    res.write('<p>Hello Hemanth!</p>');
    res.end();
});

server.listen(3001, 'localhost', () => {
    console.log('Listening on port 3000');
});
