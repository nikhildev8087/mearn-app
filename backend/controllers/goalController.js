const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');
//@desc Get goals
//@route GET /api/goals
//@access Private

const getGoals = asyncHandler(async(req, res) => {
    const goals = await Goal.find({user: req.user.id})
    res.status(200).json(goals)
    // res.status(200).json({message: 'Get Goals'})
})

//@desc Set goals
//@route POST /api/goals
//@access Private

const setGoals = asyncHandler(async(req, res) => {
     console.log(req.body);
     if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})

//@desc UPdate goal
//@route PUT /api/goals/:id
//@access Private

const updateGoals = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    // const user = await User.findById(req.user.id)

    //Check for user 
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    //Make sure the logged in user matches the goal user
    if(goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoals = await Goal.findByIdAndUpdate(req.params.id, req.
        body, {
            new:true, 
    })

    
    res.status(200).json(updatedGoals)
})

//@desc Delete goals
//@route DELETE /api/goals/:id
//@access Private

const deleteGoals = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    // const user = await User.findById(req.user.id)

    //Check for user 
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    //Make sure the logged in user matches the goal user
    if(goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await goal.remove()

    res.status(200).json({id: req.params.id})
})



module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}



