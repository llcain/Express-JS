// require express
const express = require('express')
const User = require('../models/userModel')

const router = express.Router()

// Get all users
router.get('/', (req, res) => {
    res.json({mssg: "Get all users"})
})

// Get a single user
router.get('/:id', (req,res) => {
    res.json({mssg: "Get a single user"})
})

// Post a new user
router.post('/', (req, res) => {
    const {name, age, username} = req.body
    try {
        const user = User.create({name, age, username})
        res.status(200).json(user)

    } catch (erro) {
        res.status(400).json({error: error.message})
    }
    res.json({mssg: "Post a new user"})
})

// Delete a user
router.delete('/:id', (req, res) => {
    res.json({mssg: "delete a user"})
})

// Update a user
router.patch('/:id', (req, res) => {
    res.json({mssg: "Update a user"})
})

module.exports = router