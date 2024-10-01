const successResponse = (res, message, data) => {
  res.status(200).json({
    success: true,
    message,
    data
  })
}

const errorResponse = (res, message, error) => {
  res.status(500).json({
    success: false,
    message,
    error: error.message
  })
}

module.exports = { successResponse, errorResponse }
