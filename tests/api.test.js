const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('./helper')
const User = require('../models/user')


describe('usernames and passwords that do not fulfill requirements are rejected', () => {

  beforeEach(async () => {
    let userObject = new User(helper.oneUser) 
    await User.deleteMany({})
    await userObject.save()
  })

  test('adding second instance of username gets response code 400', async () => {
    await api
    .post('/api/users')
    .send(helper.oneUser) 
    .expect(400)
  })

  test('adding new user with too short name gets response code 400', async () => {
    await api
    .post('/api/users')
    .send(helper.shortNameUser) 
    .expect(400)
  })

  test('adding new user with too short password gets response code 400', async () => {
    await api
    .post('/api/users')
    .send(helper.shortPasswordUser) 
    .expect(400)
  })
})



describe('get all blogs', () => {

  beforeEach(async () => {
    await Blog.deleteMany({})
    let blogObject = new Blog(helper.listWithTwoBlogs[0])
    await blogObject.save()
    blogObject = new Blog(helper.listWithTwoBlogs[1])
    await blogObject.save()
  })

  test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(helper.listWithTwoBlogs.length)
  })
  
  test('a specific blog is within the returned blogs', async () => {
    const response = await api.get('/api/blogs')
  
    const contents = response.body.map(r => r.title)
  
    expect(contents).toContain(
      'React patterns'
    )
  })

  test("returned blog has a field named 'id'", async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
  })
  
  test("returned blog does not have a field named '_id'", async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0]._id).toBeFalsy()
  })
})

describe('post new blog', () => {

  beforeEach(async () => {
    await Blog.deleteMany({})
    await api
        .post('/api/blogs')
        .send(helper.blogNoLikes)  
  })

  test('number of blogs grows', async () => {
      const response = await api.get('/api/blogs')
      expect(response.body).toHaveLength(1)
  })
  test('added blog has correct author', async () => {
    const response = await api.get('/api/blogs')
    const contents = response.body.map(r => r.author)
    expect(contents).toContain(
      'Scott Jenson'
    )
  })
  test('new blog without likes -field defined gets likes -field of 0 likes', async () => {
    const response = await api.get('/api/blogs')
    let savedBlog = JSON.parse(response.text)
    expect(savedBlog[0].likes).toBe(0)
  })
})

describe('bad requests', () => {

  beforeEach(async () => {
    await Blog.deleteMany({}) 
  })

  test('new blog without title gets response code 400', async () => {
    await api
    .post('/api/blogs')
    .send(helper.blogNoTitle) 
    .expect(400)
  })
  test('new blog without url gets response code 400', async () => {
    await api
    .post('/api/blogs')
    .send(helper.blogNoAuthor) 
    .expect(400)
  })

  test('deletion of non-existent blog gets response code 500', async () => {
    await api
    .delete('/api/blogs/5ff4d89cd3ee8c9aa5560790')
    .send() 
    .expect(500)
  })
})

afterAll(() => {
  mongoose.connection.close()
})