const Cards = require('../Models/Cards');

exports.obterlist = async (req, res) => {
  
        const cards = await Cards.find()
        console.log("todos os pokemones");
        res.status(200).send('tudos os pokemons sao:')
  
};

exports.getOne = async (req, res) => {
    res.status(200).send(req.params)
}
exports.agregar = async (req, res) => {

    const { card_id, type_card, name, hp, attack, defense,  speed, energy, total_power } = req.body;
    const novaCarta = new Cards ({card_id, type_card, name, hp, attack, defense,  speed, energy, total_power });
    await novaCarta.save();
        res.status(201).send('dados recevedos')
   
}

exports.atualizar = async (req, res) =>{
    res.status(204).sen('Card actualizado')
}

exports.eliminar = async (req, res) => {
    res.status(204).send('Card eliminada')
}