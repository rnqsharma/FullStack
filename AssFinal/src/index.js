import AssModel from './model/model';
import AssController from './controller/asscontroller';
import AssView from './view/assview';
import $ from 'jquery';
let elements = {
     div1 : $('#div1'),
     button1 : $('#button1'),
     filter : $('#filter')
}

let model = new AssModel();
let controller = new AssController(model);
let view = new AssView(elements);
view.init();