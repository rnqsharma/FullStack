import GithubProfile from './model/github';
import GithubController from './controller/githubcontroller';
import GithubView from './view/githubview';
let elements = {
    search : document.querySelector('#search'),
    list : document.querySelector('#list')
}

let model = new GithubProfile();
let controller = new GithubController(model);
let view = new GithubView(elements);
view.init();