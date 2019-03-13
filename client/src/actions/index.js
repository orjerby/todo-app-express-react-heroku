import { SIGN_IN, SIGN_OUT } from './types'
import users from '../apis/users'

export const signIn = values => async dispatch => {
    console.log(values)
    const response = await users.post('/login', values)
    console.log(response)
    dispatch({ type: SIGN_IN, payload: response.data })
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}