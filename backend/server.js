require('dotenv').config()
// require express

const express = require('express');
// requires routes
const userRoutes = require('./routes/users')
const mongoose = require('mongoose')


// express app

const app = express();

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.path)
    next()
})

// routes 

app.use('/api/users', userRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        });
    })
    .catch((error) => {
        console.log(error)
    })

// listen for request

