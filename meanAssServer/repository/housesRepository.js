const House = require('../model/houses');
class HousesRepository{

    getAllHouses(){
        return House.find({}).then(houses => houses);
    }


}


module.exports = new HousesRepository();