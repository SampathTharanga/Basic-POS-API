const express = require('express')
const apiRouter = require('./api/user')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()
const port = process.env.DB_PORT

//PARSE APPLICATION/X-WWW-FORM-URLENCODED
app.use(bodyParser.urlencoded({ extended: false }))

//PARSE APPLICATION/JSON
app.use(bodyParser.json())

//CONNECT ALL OUR ROUTES TO OUR APPLICATION
app.use('/api/v1/user', apiRouter)

//TURN ON THAT SERVER
app.listen(port, () => { console.log(`Server is runing on port ${port}.`)})