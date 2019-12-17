import Observer from '../observer/githubobserver'
export default class GithubProfile{
    constructor(github=[]){
        this.github = github;
        this.observer = new Observer();

    }
    apiCall(name){
        return fetch(`https://api.github.com/users/${name}`)
.then(response=>response.json())

    }

searchNewName=(name)=>{
        if(name)
        this.apiCall(name).then(data=>{
            this.github.push(
                    {login:data.login,
                    avatar: data.avatar_url})
                    
                    this.observer.notify(this.github) 
        })
       

    }


}