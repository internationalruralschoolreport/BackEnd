const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const postsRouter = require('../config/posts/postsRouter');
const usersRouter = require('../config/users/userRouter');


const server = express();


server.use(helmet());
server.use(cors());
server.use(express.json());


server.use('/posts', postsRouter);
server.use('/users', usersRouter);



server.get('/', (req, res) => {
    res.send('IR School Report Backend')
})



module.exports = server;