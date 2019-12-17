import Observer from '../observer/githubobserver';
import IGithubModel from './githubModel';
export default class GithubProfile {
    public observer: Observer;
    constructor(public github= new Array<IGithubModel>()) {
        this.github = github;
        this.observer = new Observer();

    }
    public apiCall(name: string): Promise<IGithubModel> {
        return fetch(`https://api.github.com/users/${name}`)
.then((response: Response) => response.json());

    }
public searchNewName = (name: string): void => {
        if (name) {
        this.apiCall(name).then((data: IGithubModel) => {
            this.github.push({
                avatar_url: data.avatar_url, login: data.login,
            });
            this.observer.notify(this.github);
        });
    }
}
}
