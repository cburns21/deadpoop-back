
exports.up = function(knex, Promise) {
    return knex.schema.createTable('responses', table => {
        table.increments()
        table.boolean('question1_response')
        table.integer('question2_response')
        table.boolean('question3_response')
        table.integer('player_id')
        table.integer('character_id')
        })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('responses')
};
