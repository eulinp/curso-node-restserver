const { request, response } = require('express')

    const usuariosGet = (req = request, res = response) => {
        const query = req.query
        res.json({
            msg: 'get Api - Controlador',
            query
        })
    }

    const usuariosPost = (req, res = response) => {
        res.json({
            msg: 'Post Api - Controlador'
        })
    }

    const usuariosPut = (req, res = response) => {
        const id = req.params.id;
        res.json({
            msg: 'Put Api - Controlador',
            id
        })
    }

    const usuariosPatch = (req, res = response) => {
        res.json({
            msg: 'Patch Api - Controlador'
        })
    }

    const usuariosDelete = (req, res = response) => {
        res.json({
            msg: 'Delete Api - Controlador'
        })
    }

  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
  }