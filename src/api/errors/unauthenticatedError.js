import {StatusCodes}  from "http-status-codes";
import CustomAPIError from "./customAPIError";

class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}

export default UnauthenticatedError;