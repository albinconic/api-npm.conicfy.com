const CustomAPIError = require('../errors/customAPIError');
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong!',
    };

    if (err instanceof CustomAPIError) {
        customError = { statusCode: err.statusCode, msg: err.message };
    }

    res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
