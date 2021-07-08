const pool = require('../config/mysql')

let user_db = {}



//DISPLAY LIST OF ALL USERS
user_db.user_list = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) console.error(error)
            console.log('MySQL Connection Establish!', connection.threadId)
            connection.query('SELECT * FROM pos_user', (error, results) => {
                if (error) return reject(error)
                //console.log('User Query Results: ', results)
                return resolve(results)
                connection.release(error => { if (error) console.error(error) })
            })
        })
    })
}

//DISPLAY USER ID RELATED DETAILS
user_db.user_detail = (username) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if(error) console.error(error)
            console.log('MySQL Connection Establish!', connection.threadId)
            connection.query('SELECT * FROM pos_user WHERE username = ?', [username], (error, results) => {
                if (error) return reject(error)
                return resolve(results[0])
                connection.release(error => { if(error) console.error(error) })
            })
        })

    })
}

//ADD NEW USER
user_db.addNewUser = ([data]) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if(error) console.error(error)
            console.log('MySQL Connection Establish!', connection.threadId)
            connection.query(`INSERT INTO pos_user (username, password, sec_question, sec_answer) VALUES (?)`, [data], (error, results) => {
                if (error) return reject(error)
                return resolve(results[0])
                connection.release(error => { if(error)console.erro(error) })
            })
        })
    })
}

//UPDATE USER
user_db.updateUser = (data, username) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if(error) console.error(error)
            console.log('MySQL Connection Establish!', connection.threadId)
            connection.query('UPDATE pos_user SET password = ?, sec_question = ?, sec_answer = ? WHERE username = ?', [data.password, data.sec_question, data.sec_answer, username], (error, results) => {
                if (error) return reject(error)
                return resolve(results[0])
                connection.release(error => { if(error) console.error(error) })
            })
        })
    })
}


//DELETE USER
user_db.deleteUser = (username) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if(error) console.error(error)
            console.log('MySQL Connection Establish!', connection.threadId)
            connection.query('DELETE FROM pos_user WHERE username = ?', [username], (error, results) => {
                if (error) return reject(error)
                return resolve(results[0])
                connection.release(error => { if(error) console.error(error) })
            })
        })
    })
}

module.exports = user_db