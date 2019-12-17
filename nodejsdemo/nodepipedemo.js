const fs = require('fs')

class ReadWrite{
    static pipe(inFile, outFile){
        const readableStream = fs.createReadStream(inFile);
        const writeableStream = fs.createWriteStream(outFile);
        readableStream.pipe(writeableStream);
    }
}

// ReadWrite.pipe('tmp.obj', 'tmpcopy.obj');
ReadWrite.pipe('tmp.obj','tmpcopy.obj')