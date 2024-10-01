const express = require('express')
const { getAllUsers, createUser } = require('../controllers/userController')
const { validateUser } = require('../validators/userValidator')
const logMiddleware = require('../middlewares/logMiddleware')
const router = express.Router()

router.get('/', logMiddleware, getAllUsers)
router.post('/', validateUser, createUser)

module.exports = router
