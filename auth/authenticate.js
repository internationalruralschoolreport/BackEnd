const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'this is the secret!';

module.exports = { authenticate };



// gives user access to site
function authenticate(req, res, next) {
    const token = req.get('Authorization');

    if (token) {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return res.status(401).json(err);
            }

            req.decoded = decoded;

            next();
        });
    } else {
        return res.status(401).json({ error: 'No token provided' });
    }
}