const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('../errors');

const getImage = async (req, res, next) => {
    try {
        const width = req.params.width;
        const height = req.params.height;

        // Check if `width` and `height` are numbers
        if (width && !/^\d+$/.test(width)) {
            throw new CustomAPIError.BadRequestError('Width must be a numeric value.');
        }

        if (height && !/^\d+$/.test(height)) {
            throw new CustomAPIError.BadRequestError('Height must be a numeric value.');
        }

        if (!width || !height) {
            throw new CustomAPIError.BadRequestError('Both parameters (width and height) are required!');
        }

        // Generate the image
        const imageBuffer = await generateImage(width, height);

        // Set response headers for an image
        res.set('Content-Type', 'image/png');
        res.set('Content-Length', imageBuffer.length.toString());

        // Send the image buffer
        res.status(StatusCodes.OK).send(imageBuffer);
    } catch (err) {
        next(err); // Pass the error to the Express error handler
    }
};

module.exports = { getImage };
