const express = require('express');
const coneçaoDB = require('./db.connection');
const app = express();
const card = require('./controllers/cards.controllers')
const routerCards = require('./routes/cards.routes')

//Coneçao na DB
coneçaoDB ();

//settings
app.set("name", "PockeCards")
app.set("port", process.env.port || 3500 );

//middleware
app.use(express.json())

//chamando rotas
app.get('/', (req, res)=> {
    res.send("Bemvindos a PockeCards")
})

app.get('*', (req, res) => {
    res.status(404).send('O site não existe');
})

app.use("/cards", routerCards )

module.exports = app;