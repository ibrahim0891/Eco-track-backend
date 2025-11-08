

export const sendResponse = (res, statusCode, data, message, error) => {
    res.status(statusCode).json({
        data,
        message,
        error
    })
}