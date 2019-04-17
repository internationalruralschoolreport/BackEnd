const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const postsRouter = require('../config/posts/postsRouter.js');
const usersRouter = require('../config/users/userRouter.js');
const loginRouter = require('../config/login/loginRouter.js');
const submitPostRouter = require('../config/posts/submitPostRouter');

const server = express();


server.use(helmet());
server.use(cors());
server.use(express.json());


server.use('/posts', postsRouter);
server.use('/users', usersRouter);
server.use('/login', loginRouter);
server.use('/submitPosts', submitPostRouter);



server.get('/', (req, res) => {
    res.send('IR School Report Backend')
})



module.exports = server;