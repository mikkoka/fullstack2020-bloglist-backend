const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')


const blogsRouter = require('./controllers/blogs')
const loginRouter = require('./controllers/login')
const usersRouter = require('./controllers/users')

app.use(middleware.tokenExtractor)
app.use('/api/blogs', blogsRouter)
app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)
app.use(cors())
app.use(express.json())

module.exports = app