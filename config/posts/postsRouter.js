const express = require('express');

const db = require('../../database/dbConfig');

const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
    db('posts')
        .then( allPosts => res.status(200).json(allPosts))
        .catch(err => res.status(500).json(err));
})



module.exports = postsRouter;