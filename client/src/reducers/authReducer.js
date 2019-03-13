import { SIGN_IN, SIGN_OUT } from '../actions/types'

const INITIAL_STATE = {
    isSignedIn: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, token: action.payload.token, user: action.payload.user }
        case SIGN_OUT:
            return { ...state, isSignedIn: false, token: null, user: null }
        default:
            return state
    }
}