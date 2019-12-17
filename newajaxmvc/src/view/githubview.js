import GithubProfile from "../model/github";
import GithubController from "../controller/githubcontroller";

export default class GithubView{
    constructor(elements){
        this.elements = elements;
        this.model = new GithubProfile();
        this.controller = new GithubController(this.model);
    }

    init=()=>{
        
        this.model.observer.subscribe(newProfile=>{
            this.render(newProfile)
        })
        
        this.elements.search.addEventListener
        ('blur',(e)=>{
            let profile = e.target.value;
            this.controller.searchProfile(profile);

        })

    }
    render=(newProfile)=>{
        newProfile.forEach(profile=>{
            document.querySelector('#list')
            .appendChild(this.createElements("img","src",
            profile.avatar))    
        })

        

    }
    createElements(element,attribute,value){
        let elem= document.createElement(element);
        elem.setAttribute(attribute,value)
        return elem;
        }

}