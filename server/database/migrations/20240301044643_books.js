exports.up = function (knex) {
    return knex.schema.createTable('books', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('author').notNullable();
        table.decimal('price', 10, 2).notNullable(); // Example decimal with precision 10 and scale 2
        table.integer('quantity_available').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('books');
};
