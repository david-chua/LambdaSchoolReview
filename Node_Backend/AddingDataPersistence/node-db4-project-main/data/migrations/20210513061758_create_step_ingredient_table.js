
exports.up = function(knex) {
  return knex.schema.createTable('step_ingredient_info', tbl => {
    tbl.integer('step_id')
      .unsigned()
      .notNullable()
      .references('step_id')
      .inTable('steps')
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    tbl.integer('ingredient_id')
      .unsigned()
      .references('ingredient_id')
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    tbl.text('quantity').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('step_ingredient_info');
};
