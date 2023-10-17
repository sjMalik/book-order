const express = require('express');

const app = express();

app.use(express.json());
app.use('/', require('./src/routes/auth_routes'));
app.use(require('./src/middleware/error_middleware').all);

module.exports = app;
