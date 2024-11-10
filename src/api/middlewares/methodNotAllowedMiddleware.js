const { StatusCodes } = require("http-status-codes");

const methodNotAllowedMiddleware = (req, res) => {
    res.status(StatusCodes.METHOD_NOT_ALLOWED).send('Method not allowed!');
};

module.exports = methodNotAllowedMiddleware;
