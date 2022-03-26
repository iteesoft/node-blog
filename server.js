const http = require('http');
const fs = require('fs')

const chelsea = {
    "name": "Chelsea FC",
    "nickname": "The blues",
    "country": "England"
}

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "json");

    fs.readFile('./chelsea.txt', (err, data)=> {
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