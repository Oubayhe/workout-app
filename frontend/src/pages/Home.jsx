import React from 'react'
import { useEffect, useState } from 'react'

// Components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        fetch('/api/workouts').then(
            res => res.json()
        ).then(data => { setWorkouts(data)})
    }, [])

  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map((workout) => {
            return (
                <WorkoutDetails key={ workout._id} workout={ workout } />
            )
        })}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home
