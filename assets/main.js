const http = require('http');
const fs = require('fs')
const server = http.createServer((req, res) => {
    //console.log('req');
    //Routing method
    let path = './';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 200;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {

            res.write(data);
            res.end();
        }

    });
});

server.listen(3002, 'localhost', () => {
    console.log('Listening on port 3000 har');
});




