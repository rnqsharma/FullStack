import Observer from '../observer/githubobserver'
import $ from 'jquery';

export default class GithubProfile{
    constructor(github=[]){
        this.github = github;
        this.observer = new Observer();

    }
    apiCall(name){
        return $.ajax({url:`https://api.github.com/users/${name}`, 
    dataType: 'json'})


    }

searchNewName=(name)=>{
        if(name)
        this.apiCall(name).then(data=>{
            this.github.push(
                    {login:data,
                    avatar: data.avatar_url})
                    
                    this.observer.notify(this.github)
        })
       

    }


}