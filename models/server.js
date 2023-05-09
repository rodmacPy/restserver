const express = require('express');
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Patch
        this.userPatch = '/api/usuarios';


        //Middlewares
        this.middlewares();


        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors())
        // Lectura y parseo del Body
        this.app.use( express.json())
        //Directorio Publico
        this.app.use(express.static('public'))
    }

    routes() {

        this.app.use(this.userPatch, require('../routes/usuarios'))


    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Connect server http://localhost:${this.port}`)
        })
    }
}

module.exports = Server;