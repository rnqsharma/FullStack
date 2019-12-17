class FetchData{
    apiCall(id){
        return fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>response.json());
    }
}

const fetchData = new FetchData();
document.querySelector('#userId').addEventListener('blur', (e)=>{
    let userId = e.target.value;
    fetchData.apiCall(userId).then(users=>{
        document.querySelector('#title').value=users.title;
        document.querySelector('#body').value=users.body;
    })
})