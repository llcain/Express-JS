// require express
const express = require('express')
const User = require('../models/user')

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
router.post('/', async (req, res) => {
    const {name, age} = req.body
    try {
        const user = await User.create({name, age})
        res.status(200).json(user)

    } catch (error) {
        res.status(400).json({error: error.message})
    }    
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