const express = require('express');

const Recipe = require('./recipe-model');

const router = express.Router();


router.get('/:id', async (req,res,next) =>{
  const recipe = await Recipe.getRecipeById(req.params.id)
// const recipe = await Recipe.getIngredientsStepById(req.params.id);
  res.status(200).json(recipe);
})


module.exports = router;
