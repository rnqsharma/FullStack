import GithubProfile from "../model/github";
import GithubController from "../controller/githubcontroller";

export default class GithubView{
    constructor(elements){
        this.elements = elements;
        this.model = new GithubProfile();
        this.controller = new GithubController();
    }

    init(){
        

    }
    render(newProfile){
        

    }
    

}