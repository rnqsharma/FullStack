import GithubProfile from '../model/github';

export default class GithubController {
    constructor(public model: GithubProfile) {
        // this.model = model;   public para so no need to initialise
    }
    public searchProfile = (name: string): void =>  {
        this.model.searchNewName(name);
    }
}
