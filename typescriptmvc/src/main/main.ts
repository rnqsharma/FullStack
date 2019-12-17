import GithubController from '../controller/githubcontroller';
import GithubProfile from '../model/github';
import GithubView from '../view/githubview';
import {IViewElements} from '../view/githubview';
const elements: IViewElements = {
    list : document.querySelector('#list') as HTMLDivElement,
    search : document.querySelector('#search') as HTMLInputElement,
};

const model = new GithubProfile();
const controller = new GithubController(model);
const view = new GithubView(elements, model, controller);
view.init();
