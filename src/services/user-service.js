const users = []
const STORAGE_KEY_LOGGEDIN_USER = "loggedInUser"
export const userService = {
    getLoggedinUser,
    login,
    signup,
    logout,
    saveLocalUser,
}

async function login(userCred) {
    const user = users.find(({ name }) => name === userCred.name)
    if (user) return saveLocalUser(user)
}

async function signup(user) {
    const addedUser = await _addUser(user)
    return saveLocalUser(addedUser)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function _addUser(user) {
    user._id = _makeId()
    user.coins = 100
    user.moves = []
    users.push(user)
    return Promise.resolve(user)
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function _makeId(length = 5) {
    var txt = ""
    var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}
