// Simple helper method to create new errors with specific status value

const createError = ({
    status = 500,
    message = 'Something went wrong',
}) => {
    const error = new Error(message);
    error.status = status;

    return error;
};

module.exports = {
    createError,
    BAD_REQUEST: 400,
    UNAUTHOROZED: 401,
    FORBIDDEN: 403,
    CONFLICT: 409,
    NOT_FOUND: 404,
    UNPROCESSABLE: 422,
    GENERAL_ERROR: 500,
};
