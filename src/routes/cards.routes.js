const { Router } = require("express");
const { router } = require("../app");
const routerCards = Router();

routerCards.get('/', (req, res) => {
    res.send('Bemvindos a mi API')
})

routerCards.get('/cards/:id', (req, res) => {
    res.send()
})

module.exports = routerCards;