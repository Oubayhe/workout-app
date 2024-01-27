// for .env variables
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')


// Express App
const app = express()

// Middlewares
// use this instead of morgan('dev') middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
// For JSON
app.use(express.json())

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen to the requests
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`)
        })
    })
    .catch((err) => { console.log(err) })

// Listening for requests


