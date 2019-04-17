const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'this is the secret!';

module.exports = { 
    authenticate,
    adminAccess
};



// gives user access to site
function authenticate(req, res, next) {
    const token = req.get('Authorization');

    if (token) {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return res.status(401).json(err);
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(401).json({ error: 'No token provided' });
    }
}


// gives admin access to mark posts as done/scheduled
function adminAccess(req, res, next) {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ error: 'Error validating token' })
            } else {
                if (decodedToken.isAdmin) {
                    req.decodedJwt = decodedToken;
                    next();
                } else {
                    res.status(403).json({ error: 'This account is not an authorized Admin account' })
                }
            }
        });
    } else {
        res.status(401).json({ error: 'No token provided'});
    }
}