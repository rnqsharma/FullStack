
const EventEmitter = require('events')
module.exports = class ReadData extends EventEmitter{
    execute(cb, ...args){
        console.time('execute');
        this.emit('begin');
        cb(...args,(err,data) => {
            if(err)
            return this.emit('error', err)
            this.emit('data', data.toString())
            console.timeEnd('execute');
            this.emit('end', 'Completed')
        })
    }
}