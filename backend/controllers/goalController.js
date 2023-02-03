const asyncHandler = require('express-async-handler');

//@desc Get goals
//@route GET /api/goals
//@access Private

const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Get Goals'})
})

//@desc Set goals
//@route POST /api/goals
//@access Private

const setGoals = async(req, res) => {
     console.log(req.body);
     if(!req.body.text){
        res.status(400)
        // throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Get Goals'})
}

//@desc UPdate goal
//@route PUT /api/goals/:id
//@access Private

const updateGoals = async(req, res) => {
    res.status(200).json({message:`Update goal ${req.params.id}`})
}

//@desc Delete goals
//@route DELETE /api/goals/:id
//@access Private

const deleteGoals = async(req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}



module.exports = {
    getGoals, setGoals,updateGoals, deleteGoals
}


