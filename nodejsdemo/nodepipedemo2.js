const fs=require('fs');
const promisePipe = require('promisepipe');
class ReadWritePromise{

static pipe(inFile,outFile){
return promisePipe(fs.createReadStream(inFile),
fs.createWriteStream(outFile))

}

static async pipe1(inFile,outFile){

try {
await promisePipe(
fs.createReadStream(inFile),fs.createWriteStream(outFile)
);
console.log("Done writing to the output file stream!");
} catch (err) {
console.log("This stream failed:", err.source);
console.log("Original error was:", err.originalError);
}
}

}
// ReadWritePromise.pipe1('tmp.obj','tmpnewcopy.obj')
// .then(data=>console.log('sucess')).catch(reason=>console.log(reason));

ReadWritePromise.pipe1('tmp.obj','await.obj')