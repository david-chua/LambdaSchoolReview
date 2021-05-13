
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', tbl => {
    tbl.increments("step_id")
    tbl.integer('step_number')
      .unsigned()
      .notNullable()
    tbl.text('step_instructions')
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('recipe_id')
      .inTable('recipes')
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps');
};
