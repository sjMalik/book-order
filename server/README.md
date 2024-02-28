## Project Structure

my-node-project/
  ├── src/
  |   ├── models/
  |   |   ├── user.js
  |   |   ├── order.js
  |   |   └── ...
  |   ├── repositories/
  |   |   ├── userRepository.js
  |   |   ├── orderRepository.js
  |   |   └── ...
  |   ├── routes/
  |   |   ├── userRoutes.js
  |   |   ├── orderRoutes.js
  |   |   └── ...
  |   ├── services/
  |   |   ├── userService.js
  |   |   ├── orderService.js
  |   |   └── ...
  |   ├── utils/
  |   |   ├── validation.js
  |   |   ├── formatting.js
  |   |   └── ...
  ├── app.js (or index.js)
  ├── config/
  |   ├── appConfig.js
  ├── database/
  |   ├── knexfile.js
  ├── node_modules/
  ├── package.json
  ├── package-lock.json
  └── ...

1. Add Swagger UI
 ```
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerJsDocs = YAML.load('./src/api.yaml');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));
```
2. Create Migration for Book
```
cd database
knex migrate:make migration_name
```
3. Schema for book
```
exports.up = function(knex) {
  return knex.schema.createTable('books', function(table) {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('author').notNullable();
    table.decimal('price', 10, 2).notNullable(); // Example decimal with precision 10 and scale 2
    table.integer('quantity_available').notNullable();
    // Additional columns or constraints can be added here
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('books');
};
```
2. Add Book and Order Schema & Migrate
3. Add Middleware IsAuthentic and IsUserRole(role)
3. Manage Books by Admin
4. Manage Order by Customer

