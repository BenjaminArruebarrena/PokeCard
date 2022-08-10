const express = require('express');
const app = express();
const routerCards = require('./routes/cards.routes')

//settings
app.set("name", "PockeCards")
app.set("port", process.env.port || 3500 );

app.use(express.json())

//chamando rotas

app.get('/', (req, res) => {
    res.send('Bemvindos a mi API')
})

app.get('/cards/:id', (req, res) => {
    res.send()
})

app.use('/api/cards', routerCards )

module.exports = app;