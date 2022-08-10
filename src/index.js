const app = require('./app')

app.listen(app.get('port'), () => {
    console.log(`inciciando o servidor em http://localhos:${ app.get('port')}`)
    console.log('nome da aplicaçaon', app.get("name"))
})