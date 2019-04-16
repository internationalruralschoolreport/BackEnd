const express = require('express');

const db = require('../../database/dbConfig');

const postsRouter = express.Router();

//GET all posts 
postsRouter.get('/', (req, res) => {
    db('posts')
        .then( allPosts => res.status(200).json(allPosts))
        .catch(err => res.status(500).json(err));
})


//GET posts by id
postsRouter.get('/:id', (req, res) => {
    const postId = req.params.id; 
    
    db('posts')
        .where({ id: postId })
        .first()
        .then(post => res.status(200).json(post))
        .catch(err => res.status(500).json(err))
})


module.exports = postsRouter;