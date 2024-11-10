import {StatusCodes} from "http-status-codes";

const methodNotAllowedMiddleware = (c) => {
    return c.text('Method not allowed!', StatusCodes.METHOD_NOT_ALLOWED);
}

export default methodNotAllowedMiddleware;