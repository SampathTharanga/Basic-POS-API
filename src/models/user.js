const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST || 'freedb.tech',
    user: process.env.DB_USER || 'freedbtech_Sampath',
    password: process.env.DB_PASS || '19910710',
    database: process.env.DB_NAME || 'freedbtech_studentdb',
    port: process.env.DB_PORT || 3306
})

let user_db = {}

//DISPLAY LIST OF ALL USERS.
user_db.user_list = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM pos_user', (error, results) => {
            if(error)
                return reject(error)
            return resolve(results)
        })
    })
}

//DISPLAY USER ID RELATED DETAILS
user_db.user_detail = (username) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM pos_user WHERE username = ?', [username], (error, results) => {
            if(error)
                return reject(error)
            return resolve(results[0])
        })
    })
}

module.exports = user_db