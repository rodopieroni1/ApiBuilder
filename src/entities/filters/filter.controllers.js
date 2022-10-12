const Filter = require('./filter.model')
const {methods, formaters} = require('./../../services/filters.service')
const post = async (req, res) => {
  console.log(req.body)
  try {

    const newFilter = new Filter(req.body)

    await newFilter.save()
  
    res.status(201).json({
      status: 201,
      success: true,
      msg: 'El filtro se guardó correctamente',
      item: newFilter
    })

  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 400,
      success: false,
      msg: error.message,
      item: {}
    })
  }
}
const postMany = async (req, res) => {
  console.log(req.body)
  try {
    await Filter.insertMany(req.body)
  
    res.status(201).json({
      status: 201,
      success: true,
      msg: 'Se guardaron los parametros con exito',
      item: {}
    })

  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 400,
      success: false,
      msg: error.message,
      item: {}
    })
  }
}
const patch = async (req, res) => {
  console.log(req.body)
  try {

    await Filter.findByIdAndUpdate(req.params.id, req.body)

    const api = await Filter.findById(req.params.id)

    res.status(201).json({
      status: 201,
      success: true,
      msg: 'El filtro se guardó correctamente',
      item: api
    })

  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 400,
      success: false,
      msg: error.message,
      item: {}
    })
  }
}
const remove = async (req, res) => {
  console.log(req.body)
  try {
    const api = await Filter.findById(req.params.id)

    await Filter.findByIdAndDelete(req.params.id)

    res.status(201).json({
      status: 201,
      success: true,
      msg: 'El filtro se elimino correctamente',
      item: api
    })

  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 400,
      success: false,
      msg: error.message,
      item: {}
    })
  }
}

const get = async (req, res) => {
  try {
    const apis = await Filter.find()
    res.status(200).json({
      status: 200,
      success: true,
      msg: 'Filtros obtenidos con exito',
      items: apis
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 500,
      success: false,
      msg: error.message,
      items: []
    })
  }

}
const getMethods = async (req, res) => {
  try {
    res.status(200).json({
      status: 200,
      success: true,
      msg: 'Filtros obtenidos con exito',
      item: {
        array:Object.keys(methods).map(e => ({...methods[e]})),
        object: methods
      }
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 500,
      success: false,
      msg: error.message,
      items: []
    })
  }

}

const getById = async (req, res) => {
  try {
    const api = await Filter.findById(req.params.id)
    res.status(200).json({
      status: 200,
      success: true,
      msg: 'Filtro obtenido con exito',
      item: api
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 500,
      success: false,
      msg: error.message,
      item: {}
    })
  }
}

const getAllByApiId = async (req, res) => {
  const {id} = req.params
  try {
    const filters = await Filter.find({api_id: id})
    res.status(200).json({
      status: 200,
      success: true,
      msg: 'Filtros obtenidos con exito',
      items: filters
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 500,
      success: false,
      msg: error.message,
      item: {}
    })
  }
}

module.exports = {
  post,
  postMany,
  get,
  getById,
  getAllByApiId,
  patch,
  remove,
  getMethods
}