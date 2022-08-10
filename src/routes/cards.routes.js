const { Router } = require("express");
const ctrCard = require('../controllers/cards.controllers');
const routerCards = Router();

routerCards.get('/', ctrCard.obter);

routerCards.get('/:id', ctrCard.getOne)

routerCards.post('/', ctrCard.agregar);

routerCards.put('/id', ctrCard.atualizar);

routerCards.delete('/id', ctrCard.eliminar)

module.exports = routerCards;