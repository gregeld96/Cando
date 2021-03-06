const jwt = require('jsonwebtoken')
const secret = 'CANDO'

function createToken(data) {
    return jwt.sign(data, secret)
}

function verifyToken(token) {
    return jwt.verify(token, secret)
}


module.exports = { createToken, verifyToken }