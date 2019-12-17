import CityView from '../view/cityview';

const elements = {
    cityList : document.querySelector('#cityList'),
    addBtn : document.querySelector('#addBtn'),
    removeBtn : document.querySelector('#removeBtn'),
}

const view = new CityView(elements);
view.init();