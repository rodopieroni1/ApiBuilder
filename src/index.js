const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const dbConnect = require("./database")
const apiRoutes = require('./entities/api/api.routes')
const athenaRoutes= require("./entities/athena/athena.routes")
const filterRoutes = require("./entities/filters/filter.routes")
require('dotenv').config()

// ** App es una instancia de express
const app = express()

// ** Establecemos el puerto en 8080
app.set('port', process.env.PORT)

dbConnect()

// ** App (nuestro servidor), escucha a puerto
app.listen(app.get('port'), () => {
    console.log('Hola desde el servidor ' + app.get('port'))
})


app.use(morgan('dev'))

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))

const defaultRoute = '/api/v1'


app.use(defaultRoute, apiRoutes)
app.use(defaultRoute, filterRoutes)
app.use(defaultRoute, athenaRoutes)