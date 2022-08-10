const express = require('express');
const coneçaoDB = require('./db.connection');
const app = express();
const routerCards = require('./routes/cards.routes')

//Coneçao na DB
coneçaoDB ();

//settings
app.set("name", "PockeCards")
app.set("port", process.env.port || 3500 );

//middleware
app.use(express.json())

//chamando rotas

app.get('/', (req, res) => {
    res.send('Bemvindos a mi API')
})



app.use('/api/cards', routerCards )

module.exports = app;