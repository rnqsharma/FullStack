import AssObserver from '../observer/assobserver';
import $ from 'jquery';


export default class AssModel{
    constructor(assign=[]){
        this.assign = assign;
        this.observer = new AssObserver();
    }

    apiCall(){
        return fetch(`http://localhost:3000/products`).then(response=>response.json());
    }

    getData(){
        this.apiCall().then(data=>{
            console.log(data);
            this.assign.push({
                prodData : data
            })
            this.observer.notify(this.assign, 1);
        })
    }

    filterData=(name, data1)=>{
        console.log("In Model")
        console.log(name);
        console.log(data1);
        var company=[];
        
        data1.filter((dat)=>{
            console.log("In Filter");
            for(var key in dat.data){
                if(name === dat.data[key].productName){
                    this.company.push(dat.data[key])
                }
            }
        })
        // data1.filter((dat)=>{
        //     console.log("In Filter");
        //     for(var key in dat.data){
        //         if(name === dat.data[key].productName){
        //             company.push(dat.data[key])
        //         }
        //     }
        // })
        console.log("company" + company);
        this.observer.notify(company, 3);
    }

}