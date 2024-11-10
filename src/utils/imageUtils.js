import {createCanvas, loadImage} from "@napi-rs/canvas";

const generateImage = async (width, height, format = 'png') => {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    // Set background color
    context.fillStyle = '#e0e0e0';
    context.fillRect(0, 0, width, height);

    // Set text properties
    const text = `${width}x${height}`;
    context.font = 'bold 30px Arial';
    context.textAlign = 'center';
    context.fillStyle = '#333';
    context.textBaseline = 'middle';

    // Add text to the center of the image
    context.fillText(text, width / 2, height / 2);

    // Return the image as a buffer;
    return canvas.toDataURL('image/png');
}

export {generateImage};