const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'this is the secret!';

module.exports = { generateToken };

//creates session token
function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };

    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secret, options);
}