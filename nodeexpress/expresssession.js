const fs = require('fs');
const express = require('express');
const session = require('express-session');

module.exports = class ExpressSessionServer{
    constructor(){
        this.app = express();
        this.app.use(session({
            secret:'2C44-4D44-WppQ38S',
            resave:true,
            saveUninitialized:true
            }));
            
    }

    execute(){

        var auth=function(req,res,next){
            if(req.session && req.session.user === 'any' && req.session.admin)
            return next();
            
            else res.sendStatus(401);
            }
            
            
            this.app.get('/login',function(req,res){
            if(!req.query.username || !req.query.password){
            res.send('login Failed');
            
            }else if(req.query.username ==='any' && req.query.password ==='anypassword'){
            req.session.user="any";
            req.session.admin=true;
            res.send('login is sucessfull')
            }
            else{
            res.send('login Failed');
            }
            
            })
            this.app.get('/logout',function(req,res){
            req.session.destroy();
            res.send('logged out')
            });



        this.app.get('/api', auth, (req,res) => {
            
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