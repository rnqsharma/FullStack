import GithubProfile from './model/github';
import GithubController from './controller/githubcontroller';
import GithubView from './view/githubview';
import $ from 'jquery';
let elements = {
    search : $('#search'),
    list : $('#list'),              //Return Refernce to the jquery object
    form : $('#form1')
}

let model = new GithubProfile();
let controller = new GithubController(model);
let view = new GithubView(elements);
view.init();