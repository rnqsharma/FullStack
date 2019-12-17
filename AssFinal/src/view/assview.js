import AssModel from "../model/model";
import AssController from "../controller/asscontroller";

import $ from 'jquery';
var flag =0;
export default class AssView{
    constructor(elements){
        this.elements = elements;
        this.model = new AssModel();
        this.controller = new AssController(this.model);
    }

    

    init(){
        // var flag =0;
        console.log("sdgfygs")
        var data1;
        this.model.observer.subscribe(data=>{
            data1 = data;
            // if(n==3){
            //     this.render(data1, n);
            // }
            this.render(data1, 1);
            // this.render(data);
            // this.render(data, 2);
            
        })

        this.elements.button1.on('click', (e)=>{
            console.log("djasgfkja")

            // this.controller.displayData();
            ++flag;
            this.render(data1, 2);
        })


        this.elements.filter.on('keyup', (e)=>{
            console.log("In text");

            this.render(data1, 3);
            // this.controller.filterData(e.target.value, data1);
        })

        $(window).on('load', (e)=>{
            console.log("Patrs")
            this.controller.displayData();
        })
        
    }

    
    render=(data, n)=>{

        if(n==1){
            console.log(n);
            
            data.forEach(prod=>{
                
                for(var i in prod.prodData){
                    console.log(prod.prodData[i]);
    
                    $('#table1').append(`<tr id="tr1">
                <td>${prod.prodData[i].productName}</td>
                <td>${prod.prodData[i].productCode}</td>
                <td>${prod.prodData[i].releaseDate}</td>
                <td>${prod.prodData[i].price}</td>
                </tr>`)
                }
                console.log("In")
                console.log(prod);
                           
            })
        }
        else if(n == 2 && flag === 1){
            console.log("kjkfjsg")
            $('#table1').empty();

            $('#table1').append(`
                <tr>
                <th></th>
                    <th>Product</th>
                    <th>Code</th>
                    <th>Available</th>
                    <th>Price</th>
                    </tr>
                    `
            )
            data.forEach(prod=>{
                
                for(var i in prod.prodData){
                //     console.log(prod.prodData[i]);
                //     $('#table1').prepend(`
                // <td><img src="${prod.prodData[i].imageUrl}" style="width:50px;height:50px"></td>
                // `)
                // }

                $('#table1').append(`
                                
                <tr>
                <td><img src="${prod.prodData[i].imageUrl}" style="width:50px;height:50px"></td>
                <td>${prod.prodData[i].productName}</td>
                <td>${prod.prodData[i].productCode}</td>
                <td>${prod.prodData[i].releaseDate}</td>
                <td>${prod.prodData[i].price}</td>
                </tr>`)

                }
                // var i=0;
            //     var i=0;
            //     $('#table1').find('tr').each(function(i){
            //         // ++i;
            //         // this.i++;
            //         $(this).find('td').eq(0).before(`<td><img src="${prod.prodData[i].imageUrl}" style="width:50px;height:50px"></td>`);
                    
            //    });
                console.log("In")
                console.log(prod);
                           
            })
        }
        else if(n===3){
            console.log("In Render" + data);
            $(document).ready(function(){
                $("#filter").on("keyup", function() {
                  var value = $(this).val().toLowerCase();
                  $("#table1 tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                  });
                });
              });
        }
        
    }
}