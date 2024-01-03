require('dotenv').config()
// require express

const express = require('express');

// express app

const app = express();

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.path)
    next()
})

// routes 

app.get('/', (req, res) => {
    res.json({mssg:'Hello LaQuisha'})
});


// listen for request

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
});