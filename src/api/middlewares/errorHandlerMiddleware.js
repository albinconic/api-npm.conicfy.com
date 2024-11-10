import CustomAPIError from '../errors/customAPIError';
import {StatusCodes} from "http-status-codes";

const errorHandlerMiddleware = async (err, c) => {
    let customError  = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong!',
    };

    if ( err instanceof CustomAPIError ) {
        customError = {statusCode: err.statusCode, msg : err.message};
    }

    return c.json({msg: customError.msg}, customError.statusCode);
}

export default errorHandlerMiddleware;