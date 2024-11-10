const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
    const { email, name, password } = req.body;
    res.status(StatusCodes.CREATED).json({ "user": "test" });
};

const login = async (req, res) => {
    const { email, name, password } = req.body;
    res.status(StatusCodes.OK).json({ "user": "test" });
};

const logout = async (req, res) => {
    res.status(StatusCodes.OK).json({ "user": "test" });
};

module.exports = { register, login, logout };
