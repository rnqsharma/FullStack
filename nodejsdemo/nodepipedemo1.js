const fs = require('fs')
const promisePipe = require('promisepipe')

class ReadWritePromise{
    static pipe(inFile, outFile){
        return promisePipe(fs.createReadStream(inFile), 
        fs.createWriteStream(outFile) );
      }
}

// ReadWrite.pipe('tmp.obj', 'tmpcopy.obj');
ReadWritePromise.pipe('tmp.obj','tmpNewcopy.obj').then(data => {
    console.log('Success')
}).catch(reason => console.log(reason));