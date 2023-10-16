const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(express.json());
app.use(require('./src/middleware/error_middleware').all);

module.exports = app;
