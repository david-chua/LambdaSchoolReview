
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_id: 1, recipe_name: 'fried egg'},
        {recipe_id: 2, recipe_name: 'fried spam'},
        {recipe_id: 3, recipe_name: 'fried rice'}
      ]);
    });
};
