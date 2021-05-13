const db = require('../../data/db-config.js');

const getRecipeById = async recipe_id => {

  let data = await db('recipes as r')
    .join('steps as st', 'st.recipe_id', 'r.recipe_id')
    .where('r.recipe_id', recipe_id)
    .orderBy('st.step_number')

  let recipeObj = {
    recipe_name: data[0].recipe_name,
    steps:
      data[0].step_id ? data.map(step =>{
        return {
          step_id: step.step_id,
          step_number: step.step_number,
          instructions: step.step_instructions,
        }
      }) : []
  };

  for (const step of recipeObj.steps){
     step.ingredients = await getIngredientsStepById(step.step_id);
  }

  return recipeObj
}

const getIngredientsStepById = async (step_id) =>{
  const data = await db('step_ingredient_info as sii')
    .join('steps', 'steps.step_id', 'sii.step_id')
    .join('ingredients', 'ingredients.ingredient_id', 'sii.ingredient_id')
    .where('steps.step_id', step_id)

  let returnObj = data[0]? data.map(ingredient => {
     return {
      ingredient_id: ingredient.ingredient_id,
      ingredient_name: ingredient.ingredient_name,
      quantity: ingredient.quantity
    }
  }) : []

  return returnObj
}


module.exports = {
  getRecipeById,
  getIngredientsStepById
}
