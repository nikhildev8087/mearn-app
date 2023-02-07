const path = require('path')

const express = require('express');
const colors = require('colors');
const { appendFile } = require('fs');
const dotenv = require("dotenv").config()
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db')

const port =  process.env.PORT || 5000;

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))


//Serve Froentend
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../froentend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../','froentend','build','index.html')))
}else{
    app.get('/', (req,res) => res.send('Please set To production'))
}

app.use(errorHandler)

app.listen(port, ()=> console.log(`server started on port ${port}`));







