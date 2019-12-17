import GithubProfile from "../model/github";
import GithubController from "../controller/githubcontroller";
import $ from 'jquery';
import validate from 'jquery-validation'
export default class GithubView{
constructor(elements){
this.elements = elements;
this.model = new GithubProfile();
this.controller = new GithubController(this.model);
}

init(){
this.model.observer.subscribe(newProfile=>{
this.render(newProfile)
})
this.elements.search.on
('blur',(e)=>{

let profile = $(this.elements.search).val();
this.controller.searchProfile(profile);

})




this.elements.form.validate({
rules: {
fullname: {
required: true
},
description: {
required: true
}
},
submitHandler: function(form){
//alert('ajax being called...');
// form.preventDefault();
let formData=$(form).serializeArray();
console.log(formData);
$.post('http://localhost:3000/info', formData).done(()=>alert('success'))
.fail(()=>alert('failed'))
},
invalidHandler: function (event, validator) {
//alert('number of invalid fields: ' + validator.numberOfInvalids());
},
highlight: function (element, errorClass) {
$(element).closest('.form-group').addClass('has-error');
},
unhighlight: function (element, errorClass) {
$(element).closest('.form-group').removeClass('has-error');
}
});






}
render=(newProfile)=>{
$('#list').empty();
newProfile.forEach(profile=>{


// document.querySelector('#list')
// .appendChild(this.createElements("img","src",
// profile.avatar))
$('#list').append(`<div><span>${profile.login}</span><img src=${profile.avatar} style="width:50px"></div>`)


})

}
// createElements(element,attribute,value){
// let elem= document.createElement(element);
// elem.setAttribute(attribute,value)
// return elem;
// }

}