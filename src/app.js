//* dependencias
const express = require('express')
const morgan = require('morgan')
//?>rutas
const config = require('../config')
const routesUsers = require('./users/users.routes').router
const routerTeams = require('./teams/teams.routes').router
const routerAuth = require('./auth/auth.routes').router
//! configuracion inicial
const app = express()

//? asi podemos usar la data en forma de json
app.use(express.json())
//? muestra la data en consola de las peticiones
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.status(200).send('Estas en la base')
})

//! hacemos la primera version de peticion
app.use('/api/v1', routesUsers)
app.use('/api/v1', routerTeams)
app.use('/api/v1', routerAuth)


//? usamos el puestro de las config
app.listen(config.port, () =>{
    //console.log(`puerto funcionando bien ${config.port}`)
})

//* exportacion de toda la info que guardamos para los test
exports.app = app