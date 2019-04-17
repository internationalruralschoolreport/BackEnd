const express = require('express');

const db = require('../../database/dbConfig');

const Posts = require('./postModels');

const postsRouter = express.Router();

//GET all posts 
postsRouter.get('/', async (req, res) => {
    try {
        const posts = await Posts.getAll();
        res.status(200).json(posts);
    } catch(err) {
        res.status(500).json(err);
    }
})


//GET post by id
postsRouter.get('/:id', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        res.status(200).json(post);
    } catch(err) {
        res.status(500).json(err);
    }
})

//GET posts by school
postsRouter.get('/:user_school', async (req, res) => {
    try {
        const post = await Posts.findBySchool(req.params.user_school);
        res.status(200).json(post);
    } catch(err) {
        res.status(500).json(err);
    }
})


module.exports = postsRouter;