const userService = require('../services/userService')
const { successResponse, errorResponse } = require('../utils/responseHelper')

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers()
    successResponse(res, 'Users retrieved successfully', users)
  } catch (error) {
    errorResponse(res, 'Error retrieving users', error)
  }
}

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body)
    successResponse(res, 'User created successfully', user)
  } catch (error) {
    errorResponse(res, 'Error creating user', error)
  }
}

module.exports = { getAllUsers, createUser }
