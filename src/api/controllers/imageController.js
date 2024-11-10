import {StatusCodes} from "http-status-codes";
import CustomAPIError from "../errors";
import {generateImage} from "../../utils/imageUtils";

const getImage = async (c) => {
    const width = c.req.param('width');
    const height = c.req.param('height');

    // Check if `width` and `height` are numbers
    if (width && !/^\d+$/.test(width)) {
        throw new CustomAPIError.BadRequestError('Width must be a numeric value.', 400);
    }

    if (height && !/^\d+$/.test(height)) {
        throw new CustomAPIError.BadRequestError('Height must be a numeric value.', 400);
    }

    if ( !width || !height ) {
        throw new CustomAPIError.BadRequestError('Both parameters (width and height) are required!', 400);
    }

    // Generate the image
    const imageBuffer = await generateImage(width, height);

    // Set response headers for an image
    c.header('Content-Type', 'image/png');
    c.header('Content-Length', imageBuffer.length.toString());

    return c.body(imageBuffer);
    //return c.json({msg: 'test'}, StatusCodes.OK);
}

export {getImage};