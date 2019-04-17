const express = require('express');

const Posts = require('./postModels');

const submitPostRouter = express.Router();

submitPostRouter.post('/', async (req, res) => {
    try {
        if (req.body.postTitle === null || req.body.description === null ) {
            res.status(400).json({ error: 'Please provide a title and description for your request.'});
        } else {
            const post = await Posts.addPost(req.body);
            res.status(201).json(post)
        }  
    } catch(err) {
        res.status(500).json({ error: 'There was an error adding new post to the database' });
    }
})


module.exports = submitPostRouter;