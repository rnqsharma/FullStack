const housesRepository = require('../repository/housesRepository');
module.exports = (app) =>{
    app.get('/houses', (req, res)=>{
        housesRepository.getAllHouses().then(houses=>{
            console.log(houses);
            res.json(houses)});
    })    
}