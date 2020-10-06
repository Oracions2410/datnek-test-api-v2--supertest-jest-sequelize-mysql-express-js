'use strict'

const express = require('express')
const cors = require('cors')
const db = require('../models')
const authGrade = require('./auth.grade')
const bodyParser = require('body-parser')

const routes = new express.Router()
require('./routes/index')(routes, db, authGrade())

class App {
    constructor() {
        this.express = express()
        this.database()
        this.middlewares()
        this.routes()
    }

    database() {

    }

    middlewares() {
        this.express.use(express.static(__dirname + '/public'))
        this.express.use(bodyParser.urlencoded({
            extended: false
        }))
        this.express.use(express.json())
        this.express.use(cors())
    }

    routes() {
        this.express.use('/api', routes)
    }
}

module.exports = new App().express