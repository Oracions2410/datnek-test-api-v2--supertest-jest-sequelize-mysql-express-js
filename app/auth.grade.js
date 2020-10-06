require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = () => {
    class AuthGrade {
        authenticateToken(req, res, next) {
            const authHeader = req.headers['authorization']
            const token = authHeader && authHeader.split(' ')[1]

            if (token === null) {
                return res.sendStatus(401)
            }

            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
                if (err) {
                    return res.sendStatus(403)
                }
                req.user = user
                next()
            })
        }

        generateAccessToken(username) {
            return jwt.sign(
                username, process.env.ACCESS_TOKEN_SECRET, {
                    expiredIn: process.env.ACCESS_TOKEN_LIFE
                })
        }
    }

    return new AuthGrade()
}