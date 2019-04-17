const express = require('express');

const Posts = require('./postModels');

const auth = require('../../auth/authenticate');

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

module.exports = adminViewRouter;