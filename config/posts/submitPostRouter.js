const express = require('express');

const Posts = require('./postModels');

const db = require('../../database/dbConfig');

const submitPostRouter = express.Router();

submitPostRouter.post('/', async (req, res) => {
    try {
        if (req.body.postTitle === null || req.body.description === null) {
            res.status(400).json({ error: 'Please provide a title and description for your request.' });
        } else {
            const [id] = await db('posts').insert(req.body);

            const newPost = await db('posts')
                .where({ id: id })
                .first();

            res.status(200).json(newPost);
        }
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = submitPostRouter;