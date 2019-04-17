const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../../database/dbConfig');

const { generateToken } = require('../../auth/token-service');
const { authenticate } = require('../../auth/authenticate');

const loginRouter = express.Router();

const secret = process.env.JWT_SECRET || 'this is the secret!';


loginRouter.post('/', (req, res) => {

    const { email, password } = req.body;


    db('users')
        .where({email})
        .first()
        .then(saved => {
            if (saved && bcrypt.compareSync(password, saved.password)) {
                const token = generateToken(saved);

                res.status(200).json({ message: `Welcome ${saved.firstName}!`, token})
            } else {
                res.status(401).json({ message: 'Invalid email or password' })
            }
        })
        .catch(err => res.status(500).json(err))
})

//check to see if user has token
function restricted(req, res, next) {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ error: 'Invalid Token'})
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({ error: 'User does not have authorization to access'})
    }
}

module.exports = loginRouter;