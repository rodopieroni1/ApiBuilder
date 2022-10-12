const { Router } = require('express')
const { post, get, getById, patch, remove, simulateApi } = require('./api.controllers')

const router = Router()
// es para no hacer esto
// Router().metodo()
//  y para que quede asi
// router.metodo()


router.post('/apis', post)
router.get('/apis', get)

router.get('/:endpoint', simulateApi)

router.get('/apis/:id', getById)
router.patch('/apis/:id', patch)
router.delete('/apis/:id', remove)

module.exports = router