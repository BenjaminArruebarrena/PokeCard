const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Bemvindos a mi API')
})

app.get

app.listen(port, () => {
    console.log(`inciciando o servidor em http://localhos:${port}`)
})