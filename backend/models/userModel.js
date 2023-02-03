const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:[true, 'Please add the name ']
    },
    email:{
        type:String,
        require:[true, 'Please add an Email '],
        unique:true
    },
    password:{
        type:String,
        require:[true, 'Please add a Password ']
    },
},{
    timestamps: true 
})

module.exports = mongoose.model('User', userSchema)