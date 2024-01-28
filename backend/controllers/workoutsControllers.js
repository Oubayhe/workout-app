const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// Get all workout
const get_all_workouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

// Get a single workout
const get_workout = async (req, res) => {
    const {id} = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)
    if (!workout){
        return res.status(404).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

// Post a new workout
const post_workout = async (req, res) => {
    const {title, load, reps} = req.body

    // Handling Error: Missing Values - This to give better error message to the user
    let emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }
    if(!load) {
        emptyFields.push('load')
    }
    if(!reps) {
        emptyFields.push('reps')
    }
    if(emptyFields.length > 0) {
        return res.status(404).json({ error: 'Please fill in al the fields', emptyFields })
    }
    
    // Everything is OK
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete a workout
const delete_workout = async (req, res) => {
    const  { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    if (!workout){
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

// Update a workout
const update_workout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'No such workout was found'})
    }

    // Try to change {...req.body} with res.body
    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!workout){
        return res.status(400).json({error: 'No such workout was found'})
    }
    res.status(200).json(workout)
}

const workoutControllers = {
    get_all_workouts,
    get_workout,
    post_workout,
    delete_workout,
    update_workout
}

module.exports = workoutControllers