const mysql = require('mysql')

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'freedb.tech',
    user: process.env.DB_USER || 'freedbtech_Sampath',
    password: process.env.DB_PASS || '19910710',
    database: process.env.DB_NAME || 'freedbtech_studentdb',
    port: process.env.DB_PORT || 3306
})


pool.getConnection((error) => {
    if(error) throw new Error(error)
    console.log('Connected to database!!')
})

module.exports = pool