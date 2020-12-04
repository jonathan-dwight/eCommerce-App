
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'

const receiveUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}