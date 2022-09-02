const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config()


const generateAccessToken = (username) => {
    return jwt.sign(username, process.env.JWT_TOKEN_SECRET, {
        expiresIn: '1800s'
    });
}


module.exports = {
    generateAccessToken
}

