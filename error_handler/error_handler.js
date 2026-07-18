import AppError from "./appError.js";

const checkUrl = async (req, res, next) => {
    next(new AppError(`Can't found ${req.originalUrl} on the server`, 404));
};

const errorHandler = async (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    // Intercept Mongoose Validation Errors
    if (err.name === 'ValidationError') {
        // Mongoose stores each specific field error in an 'errors' object.
        // This maps over them and joins them into a single, clean sentence.
        const validationMessages = Object.values(err.errors).map(val => val.message);
        message = `Invalid input data: ${validationMessages.join('. ')}`;
        statusCode = 400; 
    }
    // Intercept Mongoose CastErrors (Invalid IDs)
    // (This fixes the issue if someone sends an invalid cart ID in the URL)
    if (err.name === 'CastError') {
        message = `Invalid ID ${err.path}: ${err.value}`;
        statusCode = 400;
    }

    // sending response
    res.status(statusCode).json({
        success: false,
        message: message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
}

export default {
    errorHandler,
    checkUrl
};