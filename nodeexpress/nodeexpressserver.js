const fs = require('fs');
const express = require('express');

module.exports = class NodeExpressServer{
    constructor(){
        this.app = express();
    }

    execute(){
        this.app.get('/api', (req,res) => {
            
                res.writeHead(200, {'Content-Type':'application/json'})
                res.end((fs.readFileSync('data.json').toString()))
        })

        this.app.get('/about', (req,res) => {
                    res.writeHead(200, {'Content-Type':'text/html'});
                    res.end(fs.readFileSync(`.${req.url}.html`))
        })

        this.app.get('/', (req,res) => {
                    res.writeHead(200, {'Location' : 'home'});
                    res.end(fs.readFileSync(`.${req.url}.html`));

        })

                
            
    
        this.app.listen(8888, ()=>console.log('server started'))
    }
}