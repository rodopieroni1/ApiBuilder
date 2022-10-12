const { Router } = require('express')
const { sendQuery, getDataBases, getTables} = require('./athena.controllers')

const router = Router()
// es para no hacer esto
// Router().metodo()
//  y para que quede asi
// router.metodo()

router.post('/athena/query', sendQuery)
router.get('/athena/databases', getDataBases)
router.get('/athena/tables/:db', getTables)

module.exports = router