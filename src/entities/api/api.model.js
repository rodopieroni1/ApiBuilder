const { Schema, model } = require('mongoose')

const ApiSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name is required']
    },
    endpoint:{
        type: String,
        required:[true, "Endpoint is required"],
        unique: true
    },
    query:{
        type: String,
        required: [true, 'Query is required']
    },
    database:{
        type: String,
        required: [true, 'Database is required']
    },
    limit: {
        type: Number,
        default: 10
    },
    table:{
        type: String,
        required: [true, 'Table is required']
    },
    author:{
        type: String,
        required: [true, 'Author is required']
    },
    status:{
        type: Boolean,
        default: true
    }
})

ApiSchema.methods.toJSON = function () {
    console.log(this.toObject())
    const { endpoint, query, status, _id, name, author, database, table, limit } = this.toObject()
    const api = { id: _id, endpoint, query, status, name, author, database, table, limit }
    return api
}


module.exports = model('Api', ApiSchema)