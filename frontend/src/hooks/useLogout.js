import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: workoutsDispatch } = useWorkoutsContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        workoutsDispatch({ type: 'SET_WORKOUTS', payload: null }) // We do this so when you getting into a page right after loggin out of a different user, you don't see ther previous user's workouts loading for second and disappearing after, so the workouts need to be set to null after every logout.
    }
    return {logout}
}