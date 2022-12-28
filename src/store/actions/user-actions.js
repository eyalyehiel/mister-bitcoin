import { userService } from "../../services/user-service"

export function transferCoins(amount) {
    return async (dispatch,getState) => {
        dispatch({ type: "SPEND_COINS", amount })
        await userService.saveLocalUser(getState().loggedInUser)
    }
}


export function signUp(user){
    return async (dispatch) => {
        const loggedInUser = await userService.signup(user)
        console.log(loggedInUser);
        dispatch({ type: 'SIGN_UP', loggedInUser})
    }
}

export function getLoggedInUser(){
    return async (dispatch) => {
        dispatch({type: 'GET_USER'})
    }
}