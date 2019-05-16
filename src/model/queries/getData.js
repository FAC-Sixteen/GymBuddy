const dbConnection = require('../db_connections.js');

const getAllUsers = () => {
    return dbConnection.query('SELECT * FROM users')
    .then(response => {return response.rows})
    .catch(err => console.log(err))
}

const getUser = (name) => {
    return dbConnection.query(`SELECT * FROM users WHERE users_name = '${name}'`)
    .then(response => {return response.rows[0]})
    .catch(err => console.log(err))
}

const getUserGoals = (userId) => {
    return dbConnection.query(`SELECT * FROM users_goals WHERE users_id = ${userId}`)
    .then(response => {return response.rows})
    .catch(err => console.log(err))
}

module.exports = {
    getAllUsers,
    getUser,
    getUserGoals
};