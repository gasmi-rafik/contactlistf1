const express = require('express')

const connectDB = require('./config/connectDB')
const user = require('./routes/contact')

const app = express()
app.use(express.json())

app.use('/api/users' ,  user)

connectDB()
const port = 5000

app.listen(port , (err)=> err ? console.log('error connect to server') : console.log('server is connected'))