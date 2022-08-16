const Cards = require('../Models/cards');

exports.obterList = async (req, res) => {
    const cards = await Cards.find(Cards);
    res.status(200).json(cards);
};

exports.getOne = async (req, res) => {
    const id = req.params.id;
    const obtenido = await Cards.findById(id)
    res.status(200).send(obtenido)
}

exports.agregar = async (req, res) => {
    const { card_id, type_card, name, hp, attack, defense,  speed, energy, total_power } = req.body;
    const novaCarta = new Cards ({card_id, type_card, name, hp, attack, defense,  speed, energy, total_power });
    await novaCarta.save();
        res.status(201).send( novaCarta )
}

exports.atualizar = async (req, res) =>{
    const id = req.params.id;
    const data = req.body;
    if (id && data) {
         await Cards.findByIdAndUpdate(id, data)
    res.status(201).send('Card actualizado')
    } else {
        res.json({msj: "dados incompletos"})
        
    }
   
}

exports.eliminar = async (req, res) => {
    const id = req.params.id;
    const eliminado = await Cards.findByIdAndDelete(id);
    res.status(200).json({ msj: 'Card eliminada', isOk: true })
    
}