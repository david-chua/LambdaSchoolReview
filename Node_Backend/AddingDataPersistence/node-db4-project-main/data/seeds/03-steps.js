
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_id: 1, step_number: 1, step_instructions: 'add oil and heat pan', recipe_id: 1},
        {step_id: 2, step_number: 2, step_instructions: 'crack egg into pan in medium heat for 2-3 mins and sprinkle salt', recipe_id: 1},
        {step_id: 3, step_number: 3, step_instructions: 'serve', recipe_id: 1},
        {step_id: 4, step_number: 1, step_instructions: 'add oil and heat pan', recipe_id: 2},
        {step_id: 5, step_number: 2, step_instructions: 'slice spam into thin slices', recipe_id: 2},
        {step_id: 6, step_number: 3, step_instructions: 'cook spam in pan until desired', recipe_id: 2},
        {step_id: 7, step_number: 4, step_instructions: 'serve', recipe_id: 2},
        {step_id: 8, step_number: 1, step_instructions: 'add oil and heat pan', recipe_id: 3},
        {step_id: 9, step_number: 2, step_instructions: 'add minced garlic into pan', recipe_id: 3},
        {step_id: 10, step_number: 3, step_instructions: 'add rice and stir', recipe_id: 3},
        {step_id: 11, step_number: 4, step_instructions: 'add soy sauce into pan and continue stirring', recipe_id: 3},
        {step_id: 12, step_number: 5, step_instructions: 'add eggs and stire', recipe_id: 3},
        {step_id: 13, step_number: 6, step_instructions: 'slice green onions as toppings if desired', recipe_id: 3},
        {step_id: 14, step_number: 7, step_instructions: 'serve', recipe_id: 3}

      ]);
    });
};
