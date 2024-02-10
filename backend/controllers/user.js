// require user model
const User = require('../models/user')
const mongoose = require('mongoose')

// get all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}

// get a single user
const getUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such user"})
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({error: "No user"})
    }
    res.status(200).json(user)
}

// create a new user

const createUser = async (req, res) => {
    const {name, age} = req.body
    // add doc to db
    try {
        const user = await User.create({name, age})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a user

const deleteUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such user"})
    }

    const user = await User.findOndAndDelete({_id: id})

    if (!user) {
        return res.status(400).json({error: " no such user"})
    }

    res.status(200).json(user)
}

// update a user

const updateUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such user"})
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...res.body
    })

    if (!user) {
        return res.status(404).json({error: "No user"})
    }
    res.status(200).json(user)
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
}