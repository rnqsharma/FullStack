export default class Observer{
    constructor(observers=[]){
        this.observers = observers;
    }

    notify(newState){
        this.observers.forEach(function(fn){
            fn(newState);
        })
    }

    subscribe(fn){
        this.observers.push(fn);
    }
}