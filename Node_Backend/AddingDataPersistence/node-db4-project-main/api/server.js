const express = require('express');

const RecipeRouter = require('./recipes/recipe-router');

const server = express();

server.use(express.json());

server.use('/api/recipes', RecipeRouter);


server.use('/', (req,res) => {
  res.json({message: '4th project api home is hit'})
})


module.exports = server;
