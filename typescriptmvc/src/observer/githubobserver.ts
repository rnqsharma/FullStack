import IGithubModel from '../model/githubModel';

export default class Observer {
    constructor(public observers= new Array<(model: IGithubModel[]) => void>()) {
        // this.observers = observers;
    }

    public notify(newState: IGithubModel []): void {
        this.observers.forEach((fn) => {
            fn(newState);
        });
    }

    public subscribe(fn: (model: IGithubModel[]) => void) {
        this.observers.push(fn);
    }
}
