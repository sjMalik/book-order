const createModelHelper = require('../helpers/model_helper');

const name = 'EmailVerification';
const tableName = 'email_verification';

const selectableProps = ['token', 'email'];

module.exports = (knex) => {
    const modelHelper = createModelHelper({
        knex,
        name,
        tableName,
        selectableProps,
    });

    const create = (props) => modelHelper.create(props);

    const verifyEmail = async (email, token) => {
        const emailVerification = await knex.select()
            .from(tableName)
            .where({ email });

        if (emailVerification.length > 0) {
            if (emailVerification[0].token === token) {
                await knex('users')
                    .update({
                        email_verification: 'VERIFIED',
                    }).where({ email });
                return {
                    status: true,
                    message: 'Valid token',
                };
            }
        } else {
            return null;
        }
        throw new Error('Invalid token');
    };

    return {
        name,
        ...modelHelper,
        create,
        verifyEmail,
    };
};
