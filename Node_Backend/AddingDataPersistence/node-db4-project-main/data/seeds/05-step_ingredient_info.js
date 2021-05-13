
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredient_info').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredient_info').insert([
        {step_id: 1, ingredient_id: 3, quantity: '1 tbsp'},
        {step_id: 2, ingredient_id: 1, quantity: '2 eggs'},
        {step_id: 2, ingredient_id: 1, quantity: '2 eggs'},
        {step_id: 2, ingredient_id: 2, quantity: 'a pinch of salt'},
        {step_id: 4, ingredient_id: 3, quantity: '2 tbsp'},
        {step_id: 5, ingredient_id: 4, quantity: '1 can'},
        {step_id: 8, ingredient_id: 3, quantity: '2 tbsp'},
        {step_id: 9, ingredient_id: 7, quantity: '1 tbsp, add as desired'},
        {step_id: 10, ingredient_id: 6, quantity: '2 cups of rice'},
        {step_id: 11, ingredient_id: 5, quantity: '1.5 tbsp of soy sauce'},
        {step_id: 12, ingredient_id: 1, quantity: '2 eggs'},
        {step_id: 13, ingredient_id: 8, quantity: '1 tbsp or as desired'}
      ]);
    });
};
