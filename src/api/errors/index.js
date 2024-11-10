const CustomAPIError = require('./customAPIError');
const BadRequestError = require('./badRequestError');
const NotFoundError = require('./notFoundError');
const UnauthenticatedError = require('./unauthenticatedError.js');
const UnauthorizedError = require('./unauthorizedError');

module.exports = {
    CustomAPIError,
    BadRequestError,
    NotFoundError,
    UnauthenticatedError,
    UnauthorizedError
};