const mongoose = require('mongoose');

const coneçaoDB = async () => {
    try{
        mongoose.connect('mongodb+srv://benjamin:123456789.@pokecards.al07hj2.mongodb.net/?retryWrites=true&w=majority')
    } catch (erro)  {
        
    }  
}