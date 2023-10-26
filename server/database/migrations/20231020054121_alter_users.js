/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.raw('ALTER TABLE users ADD COLUMN email_verification text CONSTRAINT users_email_verification_check CHECK ((email_verification = ANY (ARRAY[\'NOTVERIFIED\'::text, \'VERIFIED\'::text]))) DEFAULT \'NOTVERIFIED\'');
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.raw('ALTER TABLE users DROP COLUMN email_verification');
};
