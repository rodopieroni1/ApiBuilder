const mongoose = require('mongoose')

const dbConnect = () => {
        mongoose.connect(process.env.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).catch(error => console.log('Ocurrio un error', error))

        const connection = mongoose.connection

        connection.once('open', () => console.log('Base de datos conectada'))
}

module.exports = dbConnect