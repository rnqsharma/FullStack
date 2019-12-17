import $ from 'jquery';
export default class AssModel{
    constructor(assign=[]){
        this.assign= assign;
    }

    apicall(){
        console.log("sjgfuwr");
        return $.ajax({
            url : `https://localhost:3000/products`,
            dataType: 'json'
        })
    }

    callApi=()=>{
        this.apicall().then(data=>{
            this.assign.push({
                dataJson : data,
            })
            
        })
    }
}