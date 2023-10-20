/* eslint-disable import/no-extraneous-dependencies */
const dotEnv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
    const configFile = `./.env.${process.env.NODE_ENV}`;
    dotEnv.config({ path: configFile.trim() });
} else {
    dotEnv.config({ path: './.env' });
}

module.exports = {
    PORT: process.env.PORT,
    DB: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_TTL: process.env.JWT_TTL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    SENDGRID_NOREPLY_EMAIL: process.env.SENDGRID_NOREPLY_EMAIL,
    SALT_ROUND: process.env.SALT_ROUND,
};
