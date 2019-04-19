const express = require('express');

const Posts = require('./postModels');

const auth = require('../../auth/authenticate');
const db = require('../../database/dbConfig');

const adminViewRouter = express.Router();



//Admin View for Posts, ability to mark posts done/scheduled/deleted
adminViewRouter.get('/', auth.adminAccess, async (req, res) => {
    try {
        const posts = await Posts.getAll();
        res.status(200).json(posts);
    } catch(err) {
        res.status(500).json({ error: 'Error fetching stories' })
    }
});


//Admin view for post by ID
adminViewRouter.get('/:id', auth.adminAccess, async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ error: `Post ID #${post.id} does not exist` })
        }
    } catch(err) {
        res.status(500).json({ error: "Error retrieving post" })
    }
});


//Admin can update a post, mark is as done, scheduled, ignored
adminViewRouter.put('/:id', auth.adminAccess, async (req, res) => {
    try {
        const count = await db('posts')
            .where({ id: req.params.id })
            .update(req.body);

        if (count > 0) {
            const post = await db('posts')
                .where({ id: req.params.id })
                .first();

                res.status(200).json(post)
        } else {
            res.status(404).json({ error: `Post Id ${post.id} does noe exist` })
        }
    } catch (err) {
        res.status(500).json({ error: "Error updating story" })
    }
});


//Admin can delete posts by id 
adminViewRouter.delete('/:id', auth.adminAccess, async (req, res) => {
    try {
        const count = await db('posts')
        .where({ id: req.params.id })
        .del();

        if (count > 0) {
            res.status(200).json(Number(req.params.id));
          } else {
            res.status(404).json({ message: 'This post Id does not exist' });
          }
    } catch(err) {
        res.status(500).json(err);
    }
})


module.exports = adminViewRouter;