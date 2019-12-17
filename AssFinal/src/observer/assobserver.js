export default class AssObserver{
    constructor(observers=[]){
        this.observers = observers;
    }

    notify(newState, id){
        this.observers.forEach(function(fn){
            fn(newState, id);
        })
    }

    subscribe(fn){
        this.observers.push(fn);
    }
}