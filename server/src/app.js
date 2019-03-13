const express = require('express')
const path = require('path')
require('./db/mongoose')
const userRouter = require('./routers/user')

const app = express()

//app.use(express.static(path.join(__dirname, '..', '..', 'client', 'build')))
app.use(express.json())
app.use(userRouter)

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', '..', 'client', 'build', 'index.html'));
// });

module.exports = app