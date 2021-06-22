const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.DB_PORT || 3000








//LISTEN TO THE PORT
app.listen(port, () => { console.log(`Server is runing on port ${port}.`)})