const express = require('express');
const app = express();

//settings
app.set("name", "PockeCards")
app.set("port", process.env.port || 3500 );

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Bemvindos a mi API')
})

app.get('/cards/:id', (req, res) => {
    res.send()
})

module.exports = app;