const express = require('express');

const db = require('../../database/dbConfig');

const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
    db('users')
        .then( allUsers => res.status(200).json(allUsers))
        .catch(err => res.status(500).json(err));
})


module.exports = usersRouter;