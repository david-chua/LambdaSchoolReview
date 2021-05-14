const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const usersRouter = require("./users/users-router.js");
const authRouter = require('./auth/auth-router');
const server = express();

server.use(session({
  // config of cookie
  name: 'monkey',
  secret: 'keep it secret, keep it safe!',
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false, // if true the cookie is not set unless it's on https connection
    httpOnly: true, // if true the cookie is not accessible through document.cookie
  },
  resave: false, // some data stores need this set to true
  saveUninitialized: false, // privacy implications, if false, no cookie is set on client unless the req.session is changed.
  store: new KnexSessionStore({
    knex: require('../database/connection.js'), // confgired instance of knex 
    tablename: 'sessions', // table that will store session inside the db, name it anything you want
    sidfieldname: 'sid', // column that will hold the session id, name it anything you want
    createtable: true, // if the table does not exist, it will create it autoamtically
    clearInterval: 1000 * 60 * 60 // time it takes to check for old session and remove them from the database to keep it clean and performant.
  })
}))

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
