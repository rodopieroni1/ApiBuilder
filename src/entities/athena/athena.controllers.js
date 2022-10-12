const { makeQuery } = require('../../services/athena.service')

const sendQuery = async (req, res) => {
    const { sql, db } = req.body
    makeQuery(sql, db)
      .then((data) => {
        console.log('Row Count: ', data.length)
        console.log('DATA: ', data)
        res.status(200).json({
          status: 200,
          success: true,
          msg: 'Datos obtenidas con exito',
          items: data
        })
      })
      .catch((e) => {
        console.log(e)
        res.status(500).json({
          status: 500,
          success: false,
          msg: e,
          items: []
        })
      })
  }

const getDataBases = async (req, res) => {
makeQuery('SHOW DATABASES')
    .then((data) => {
    console.log('Row Count: ', data?.length)
    console.log('DATA: ', data)
    res.status(200).json({
        status: 200,
        success: true,
        msg: 'Bases de datos obtenidas con exito',
        items: data || []
    })
    })
    .catch((e) => {
    res.status(500).json({
        status: 500,
        success: false,
        msg: e,
        items: []
    })
    })
}

const getTables = async (req, res) => {
const {db} = req.params
makeQuery('SHOW TABLES',db)
    .then((data,) => {
    console.log('Row Count: ', data.length)
    console.log('DATA: ', data)
    res.status(200).json({
        status: 200,
        success: true,
        msg: 'Tablas obtenidas con exito',
        items: data
    })
    })
    .catch((e) => {
    res.status(500).json({
        status: 500,
        success: false,
        msg: e,
        items: []
    })
    })
}

  module.exports = {
    sendQuery,
    getTables,
    getDataBases
  }