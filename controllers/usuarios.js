const { response, request } = require('express')


const usuariosGet = (req = request, res = response) => {
    const { nombre = 'no name', apikey, page = 1, limit } = req.query
    res.json({
        msj: 'api get',
        nombre,
        apikey,
        page,
        limit
    })

}

const usuariosPut = (req, res) => {
    const { id } = req.params
    res.json({
        msj: 'api put',
        id
    })
}

const usuariosPost = (req, res) => {
    const body = req.body
    res.json({
        msj: 'api post',
        body
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msj: 'api delete'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}