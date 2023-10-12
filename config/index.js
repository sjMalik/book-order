/* eslint-disable import/no-extraneous-dependencies */
const dotEnv = require('dotenv');

if (process.env.NODE_ENV !== 'prod') {
    const configFile = `./.env.${process.env.NODE_ENV}`;
    dotEnv.config({ path: configFile.trim() });
} else {
    dotEnv.config({ path: './.env' });
}

module.exports = {
    PORT: process.env.PORT,
    DB: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
};
