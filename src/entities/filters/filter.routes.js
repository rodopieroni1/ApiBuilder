const { Router } = require('express')
const { post, postMany, get, getById, patch, remove, getAllByApiId, getMethods } = require('./filter.controllers')

const router = Router()

router.post('/filters', post)
router.post('/filters/many', postMany)
router.get('/filters', get)
router.get('/filters/methods', getMethods)
router.get('/apis/filters/:id', getAllByApiId)
router.get('/filters/:id', getById)
router.patch('/filters/:id', patch)
router.delete('/filters/:id', remove)

module.exports = router