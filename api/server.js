const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { authenticate } = require('../helpers/00-auth/auth-model');

const server = express();

const authRouter = require('../helpers/00-auth/auth-router')
const userRouter = require('../helpers/01-user/user-router');
const journalRouter = require('../helpers/02-journal/journal-router');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/auth', authRouter);
server.use('/users', userRouter);
server.use('/journals', journalRouter);

server.get('/', (req, res) => {
    res.send("I'm on it boss!")
});

module.exports = server;