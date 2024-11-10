import {StatusCodes} from "http-status-codes";

const register = async (c) => {
    const {email, name, password} = await c.req.json();

    return c.json({"user": "test"}, StatusCodes.CREATED);
}

const login = async (c) => {
    const {email, name, password} = await c.req.json();

    return c.json({"user": "test"}, StatusCodes.OK);
}

const logout = async (c) => {
    //const {email, name, password} = await c.req.json();

    return c.json({"user": "test"}, StatusCodes.OK);
}

export { register, login, logout };