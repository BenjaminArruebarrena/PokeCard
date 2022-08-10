

exports.obter = (req, res) => {
    res.estatus(200)
}

exports.agregar = (req, res) => {
    res.status(201)
}

exports.atualizar = (req, res) =>{
    res.status(200)
}

exports.eliminar = (req, res) => {
    console.log('eliminado')
    res.status(200)
}