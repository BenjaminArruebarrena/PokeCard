const mongoose = require('mongoose');

const coneçaoDB = async () => {
    try{
    mongoose.connect('mongodb+srv://benjamin:123456789.@pokecards.al07hj2.mongodb.net/pokeCards?retryWrites=true&w=majority')
    console.log('coneçao satisfatoria');
    } catch (erro)  {

    }  
}

module.exports = coneçaoDB;