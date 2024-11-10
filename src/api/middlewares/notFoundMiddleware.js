import {StatusCodes} from "http-status-codes";

const notFoundMiddleware = (c) => {
    return c.text('Route does not exist!', StatusCodes.NOT_FOUND);
}

export default notFoundMiddleware;