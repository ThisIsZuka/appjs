require('dotenv').config()

const config = {
    server: process.env.DB_HOST, //update me
    authentication: {
        type: 'default',
        options: {
            userName: process.env.DB_USERNAME, //update me
            password: process.env.DB_PASSWORD //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: false,
        database: process.env.DB_DATABASE //update me
    }
};


module.exports = config;