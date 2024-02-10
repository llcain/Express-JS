// require express
const express = require('express')
// const User = require('../models/user')
const {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser
} = require('../controllers//user')

const router = express.Router()

// Get all users
router.get('/', getUsers)

// Get a single user
router.get('/:id', getUser)

// Post a new user
router.post('/', createUser)

// Delete a user
router.delete('/:id', deleteUser)

// Update a user
router.patch('/:id', updateUser)

module.exports = router