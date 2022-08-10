const Cards = require('../Models/Cards');

exports.obter = (req, res) => {
    res.status(200).send('tudos os pokemos sao')
}

expor.getOne = (req, res) => {
    res.status(200).send('seu pokemon é')
}
exports.agregar = (req, res) => {
    res.status(201).send('Card criado')
}

exports.atualizar = (req, res) =>{
    res.status(204).sen('Card actualizado')
}

exports.eliminar = (req, res) => {
    res.status(204).send('Card eliminada')
}