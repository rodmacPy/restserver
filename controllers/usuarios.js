const { response, request } = require('express');

const Usuario = require('../models/usuario');

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

const usuariosPost = async(req, res) => {

    const body = req.body

    const usuario = new Usuario(body)

    await usuario.save();
    res.json({
        msj: 'api post',
        usuario
    })
}

const usuariosPut = (req, res) => {
    const { id } = req.params
    res.json({
        msj: 'api put',
        id
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