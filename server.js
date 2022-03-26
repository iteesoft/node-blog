const http = require('http');
const fs = require('fs')
const _ = require('lodash')


const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    const num = _.random(0, 10);

    console.log(num);

    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':    //redirect
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data)=> {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.end(data)
        }
    })
});

server.listen(PORT, HOSTNAME, ()=> {
    console.log(`server running at http://${HOSTNAME}:${PORT}/`)
});