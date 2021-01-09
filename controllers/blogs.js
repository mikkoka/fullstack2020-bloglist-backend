const express = require('express')
const jwt = require('jsonwebtoken')
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const requestLogger = require('../utils/middleware').requestLogger
blogsRouter.use(express.json())

blogsRouter.get('/', async (request, response) => {
    const allBlogs = await Blog
                      .find({})
                      .populate('user', { username: 1, name: 1 })
    response.json(allBlogs.map(blog => blog.toJSON()))
})

blogsRouter.post('/', requestLogger, async (request, response) => {
  
  try {
  const body = request.body
  if (!body.title || !body.url) throw 'error'
  
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(body.user)

  const newBlog = new Blog({
    author: body.author,
    title: body.title,
    url: body.url,
    user: user.id,
    likes: body.likes ? body.likes : 0 
  })
  
  const savedBlog = new Blog(newBlog)
  let result = await savedBlog.save()
  console.log(savedBlog)
  user.blogs = user.blogs.concat(savedBlog.id)
  await user.save()

  response.json(result.toJSON())
} catch (ex){
  console.log('exception:', ex)
  response.status(400).json({ error: 'title and url must be specified' })
}
})

blogsRouter.delete('/:id', async (request, response) => {
  const temp = await Blog.findByIdAndRemove(request.params.id)
  if (temp) response.status(204).end()
  else response.status(500).send({ error: "delete failed" })
})

module.exports = blogsRouter
