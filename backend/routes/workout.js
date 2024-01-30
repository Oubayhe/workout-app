const express = require('express')
const workoutControllers = require('../controllers/workoutsControllers')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require authotification
router.use(requireAuth)

// Get all workout
router.get('/', workoutControllers.get_all_workouts )

// Get a single workout
router.get('/:id', workoutControllers.get_workout )

// Post a new workout
router.post('/', workoutControllers.post_workout )

// Delete a workout
router.delete('/:id', workoutControllers.delete_workout )

// Update a workout
router.patch('/:id', workoutControllers.update_workout )

module.exports = router