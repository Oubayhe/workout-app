// for .env variables
require('dotenv').config()

const express = require('express')
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

// Listening for requests
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})

