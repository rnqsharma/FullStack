export default class GithubController{
    constructor(model){
        this.model = model;
        
    }
    searchProfile=(name)=>{
        this.model.searchNewName(name);
    }
}