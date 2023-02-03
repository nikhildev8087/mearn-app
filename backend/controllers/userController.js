//@desc Register new user
//@route POST /api/users
//@access Public
const registerUser = (req, res) => {
    res.json({message: 'Register User'})
}


//@desc Authenticate a user
//@route POST /api/users/login
//@access Public
const loginUser = (req, res) => {
    res.json({message: 'Login User'})
}


//@desc Get user Data
//@route POST /api/users/me
//@access Public
const getMe = (req, res) => {
    res.json({message: 'User Data'})
}

module.exports = {
    registerUser, loginUser, getMe
}