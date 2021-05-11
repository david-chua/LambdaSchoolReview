
exports.up = function(knex, Promise) {
  return knex.schema.table('fruits', tbl => {
    tbl.text('color');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('fruits', tbl => {
    tbl.dropColumn('color');
  })
};
