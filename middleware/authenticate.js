const jwt = require('jsonwebtoken');

console.log('abc');

const authenticate = (req, res ,next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'asdfghrdtfygh')

        req.user = decode
        next()

    } catch (error) {
        res.json({
            message: 'Authentication Failed!'
        })
    }
}

module.exports = authenticate