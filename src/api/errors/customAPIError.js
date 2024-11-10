class CustomAPIError extends Error {
    constructor(message) {
        super(message);
    }
}

//exports.CustomAPIError = CustomAPIError;
export default CustomAPIError;