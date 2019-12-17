const fs = require('fs');
const http = require('http');

module.exports = class Webserver{
    constructor(){
        this.server = http.createServer();
    }

    execute(){
        this.server.on('request', (req,res) => {
            switch(req.url) {
                case '/api':
                    res.writeHead(200, {'Content-Type':'application/json'})
                    res.end((fs.readFileSync('data.json').toString()))
                    break;

                case '/home':
                case '/about':
                    res.writeHead(200, {'Content-Type':'text/html'});
                    res.end(fs.readFileSync(`.${req.url}.html`))
                    break;

                case '/':
                    res.writeHead(301, {'Location' : '/home'});
                    res.end();

                default:
                    res.writeHead(404)
                    res.end();
                    break;
            }
        })
        this.server.listen(8888, ()=>console.log('server started'))
    }
}