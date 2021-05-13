
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_id: 1, ingredient_name: 'egg'},
        {ingredient_id: 2, ingredient_name: 'salt'},
        {ingredient_id: 3, ingredient_name: 'oil'},
        {ingredient_id: 4, ingredient_name: 'spam'},
        {ingredient_id: 5, ingredient_name: 'soy sauce'},
        {ingredient_id: 6, ingredient_name: 'rice'},
        {ingredient_id: 7, ingredient_name: 'minced garlic'},
        {ingredient_id: 8, ingredient_name: 'green onions'}
      ]);
    });
};
