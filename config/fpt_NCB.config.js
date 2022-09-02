require('dotenv').config()

const config = {
    host: process.env.NCB_HOST,
    port: process.env.NCB_PORT,
    user: process.env.NCB_USERNAME,
    password: process.env.NCB_PASSWORD,
    // secure: true,
    // secureOptions: { rejectUnauthorized: false }
};

module.exports = config;

