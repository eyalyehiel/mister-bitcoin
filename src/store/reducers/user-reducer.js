const INITIAL_STATE = {
    loggedInUser: null,
}

export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SPEND_COINS":
            const { loggedInUser } = state
            return {
                ...state,
                loggedInUser: {
                    ...loggedInUser,
                    coins: loggedInUser.coins - action.amount,
                },
            }
        case "SIGN_UP":
            return {
                ...state,
                loggedInUser: { ...action.loggedInUser },
            }
        case "ADD_MOVE":
            return {
                ...state,
                loggedInUser: {...loggedInUser, ...action.moves}
            }

        default:
            return state
    }
}
