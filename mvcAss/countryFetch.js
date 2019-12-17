var loadCountries = function(){
    return fetch(`http://localhost:3000/countries`).then(response=>response.json());
    
}

let countryStatesInfo = [];

let countryList = document.querySelector('#countryId');
let stateList = document.querySelector('#stateList');
loadCountries().then(function(data){
    console.log(data);
    countryStatesInfo = data;
    data.forEach(function(countryStates){
        let option = new Option(countryStates.country, countryStates.country);
        countryList.appendChild(option);
    })


})

countryList.addEventListener('change', (e)=>{
    stateList.innerHTML = '';
    let countrySelected = e.target.value;
    console.log(countrySelected);
    countryStatesInfo.filter(countryStates=>
        countryStates.country === countrySelected
    )[0].states.forEach(state=>{
        let option = new Option(state, state);
        stateList.appendChild(option);
    })

}, false);














// class countryFetch{
//     apiCall(){
//         return fetch(`http://localhost:3000/countries`)
//         .then(response=>response.json());
//     }
// }

// const fetchData = new countryFetch();
// document.querySelector('#countryId').addEventListener('click', (e)=>{
//     // let userId = e.target.value;
//     fetchData.apiCall().then(users=>{
//         console.log(users);
//         var node = document.createElement("option");
//         var text = document.createTextNode(users.country);
//         document.getElementById('countryId').appendChild()
//         document.querySelector('#countryId').value=users.country;
//         // document.querySelector('#body').value=users.states;
//     })
// })



