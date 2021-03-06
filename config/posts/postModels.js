const knexConfig = require('../../knexfile');

const db = require('../../database/dbConfig');

module.exports = {
    getAll,
    findById,
    // addPost,
    getUnmarkedPosts,
    getDonePosts,
    getScheduledPosts,
}


//get all posts
function getAll() {
    return db('posts');
};

//get posts by ID
function findById(id) {
    return db('posts')
        .where({id})
        .first();
};


// //add a new post to db
// function addPost(post) {
//     return db('posts')
//         .insert(post);
// };

//get posts that have no been marked by Admin
function getUnmarkedPosts() {
    return db('posts')
        .whereRaw('needsAtt = true');
};

//get posts marked DONE
function getDonePosts() {
    return db('posts')
        .whereRaw('resolved = true');
};

//get posts marked SCHEDULED
function getScheduledPosts() {
    return db('posts')
        .whereRaw('scheduled = true');
};


