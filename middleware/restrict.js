const jwt = require('jsonwebtoken')

const secrets = require('../auth/secrets.js')

module.exports = (req,res,next) => {
    const token = req.headers.authorization
    const secret = secrets.jwtSecret

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({
                    message: 'Invalid Credentials'
                })
            } else {
                req.decodedJwt = decodedToken;
                next()
            }
        })
    } else {
        res.status(401).json({
            message: 'No token provided!'
        })
    }
}