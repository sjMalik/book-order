const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express();

app.use(logger('combined'));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
}));
app.use('/', require('./src/routes/auth_routes'));
app.use(require('./src/middleware/error_middleware').all);

module.exports = app;
