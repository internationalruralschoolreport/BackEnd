const express = require('express');
const bcrypt = require('bcryptjs');

const db = require('../../database/dbConfig');

const usersRouter = express.Router();

//GET all users
usersRouter.get('/', (req, res) => {
    db('users')
        .then( allUsers => res.status(200).json(allUsers))
        .catch(err => res.status(500).json(err));
})


//GET users by id
usersRouter.get('/:id', (req, res) => {
    const userId = req.params.id; 
    
    db('users')
        .where({ id: userId })
        .first()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json(err))
})


//POST create new user, hash password
usersRouter.post('/', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    db('users')
        .insert(user)
        .then(newUser => res.status(201).json({newUser}))
        .catch(err => res.status(500).json(err));
})



module.exports = usersRouter;