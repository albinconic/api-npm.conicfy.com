import CustomAPIError from "./customAPIError";
import BadRequestError from "./badRequestError";
import NotFoundError from "./notFoundError";
import UnauthorizedError from "./unauthorizedError";
import UnauthenticatedError from "./unauthenticatedError";

const CustomAPIErrorNamespace = {
    CustomAPIError,
    BadRequestError,
    NotFoundError,
    UnauthorizedError,
    UnauthenticatedError,
}

export default CustomAPIErrorNamespace;