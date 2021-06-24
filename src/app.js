const express = require('express')
const apiRouter = require('./api/user')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()
const port = process.env.DB_PORT

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/v1/user', apiRouter)


app.get('/', (req, res) => {
    console.log("It's working correctly.")
})


//LISTEN TO THE PORT
app.listen(port, () => { console.log(`Server is runing on port ${port}.`)})