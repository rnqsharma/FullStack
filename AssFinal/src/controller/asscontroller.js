export default class AssController{
    constructor(model){
        this.model = model;
    }

    displayData=()=>{
        this.model.getData();
    }

    filterData=(a, b)=>{
        this.model.filterData(a, b);
    }
}