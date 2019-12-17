
class GithubFetch{
    loadgithub(name){
        return fetch(`https://api.github.com/users/${name}`).then(response=>response.json());
    }
}

let username = document.querySelector("#username");
let userButton = document.querySelector("#userBtn");
let div1 = document.querySelector("#div1");
let image = document.querySelector(".image");

let name = "";
console.log(username);
userButton.addEventListener('click', (e)=>{
    // div1.innerHTML = '';
    name = document.getElementById('username').value;
    console.log(name);
    // name = name;
    // console.log(url + name);
    const fetch = new GithubFetch();
    fetch.loadgithub(name).then((data)=>{
        console.log(data); 

        var div11 = document.getElementById("div1");
        var div01 = document.createElement("div2");
        div11.appendChild(div01);
        div01.innerHTML = data.login;
        var img = document.createElement("img");
        div01.appendChild(img);
        img.setAttribute("src", data.avatar_url);

        


        // var ul=document.getElementById("list");
        
        // var li=document.createElement("li");
        // ul.appendChild(li);   
        // li.innerHTML=li.innerHTML+data.login;
        // var li=document.createElement("li");
        // ul.appendChild(li);
        // var img=document.createElement("img");
        
        // li.appendChild(img);
        // img.setAttribute("src",data.avatar_url);

    })


})

