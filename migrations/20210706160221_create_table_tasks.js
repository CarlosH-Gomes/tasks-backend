
exports.up = function(knex, Promise) {
   return knex.schema.createTable('tasks', table => {
        table.increments('id').primary()
        table.string('desc').notNull()
        table.dateTime('estimateAt')
        table.dateTime('doneAt')
        table.integer('userId').unsigned().notNull();
        table.foreign('userId').references('id').inTable('users');
               
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tasks')
};
