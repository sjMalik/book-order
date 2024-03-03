const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerJsDocs = YAML.load('./src/api.yaml');

const app = express();

app.use(logger('combined'));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
}));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));
app.use('/auth', require('./src/routes/auth_routes'));
app.use('/books', require('./src/routes/book_routes'));
app.use(require('./src/middleware/error_middleware').all);

module.exports = app;
