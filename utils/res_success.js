const sendSuccess = (res, statusCode, dataSuccess) => {
    res.status(statusCode).json({
        message: "success",
        data: dataSuccess
    })
}

export default sendSuccess;