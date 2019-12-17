const fs = require('fs');

let p = new Promise((success, failure) => {
    fs.readFile('tmp.obj', (err, data)=>{
        if(data)
        success(data);
        else
        failure(err)
    })
    
})

p.then(data=> {console.log((data.toString().trim().split('\n').map(Number).filter(number => 
    number%2 === 1)))
    // console.log((data.toString().trim('\n')))  
     
    }
).catch(reason=>console.log(reason));