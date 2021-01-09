const bcrypt = require('bcrypt')
const express = require('express')
const usersRouter = require('express').Router()
const User = require('../models/user')
usersRouter.use(express.json())

usersRouter.post('/', async (request, response) => {
  const body = request.body
  
  if (body.password.length < 4) {
    response.status(400)
      .json({ error: 'Password must be longer than 3 characters' })
      .end()
      return
  }
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  })

  try {
    const savedUser = await user.save()
    response.json(savedUser)
  } catch(ex) { 
    response
      .status(400)
      .json({error: ex.errors.username.properties.message})
  
  }


  
})

usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({})
    .populate('blogs')
  response.json(users.map(u => u.toJSON()))
})

module.exports = usersRouter