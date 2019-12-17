const ReadData = require('./nodeeventemitterdemo');
const fs = require('fs');
const instance = new ReadData();

instance.on('begin', (data)=>console.log(data));
instance.on('end', (data)=>console.log(data));
instance.on('data', (data)=>console.log(data));
instance.on('error', (msg)=>console.log(msg));

instance.execute(fs.readFile, 'tmp.obj')