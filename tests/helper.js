
// const jwt = require('jsonwebtoken')
// const secret = require('../utils/config').SECRET

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
]

const listWithSixBlogs = [ 
  { _id: "5a422a851b54a676234d17f7", title: "React patterns", author: "Michael Chan", url: "https://reactpatterns.com/", likes: 7, __v: 0 }, 
  { _id: "5a422aa71b54a676234d17f8", title: "Go To Statement Considered Harmful", author: "Edsger W. Dijkstra", url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", likes: 5, __v: 0 }, 
  { _id: "5a422b3a1b54a676234d17f9", title: "Canonical string reduction", author: "Edsger W. Dijkstra", url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", likes: 12, __v: 0 }, 
  { _id: "5a422b891b54a676234d17fa", title: "First class tests", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll", likes: 10, __v: 0 }, 
  { _id: "5a422ba71b54a676234d17fb", title: "TDD harms architecture", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html", likes: 0, __v: 0 }, 
  { _id: "5a422bc61b54a676234d17fc", title: "Type wars", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html", likes: 2, __v: 0 }
]

const listWithNoBlogs = []



const listWithTwoBlogs = [

  { 
    title: "React patterns", 
    author: "Michael Chan", 
    url: "https://reactpatterns.com/", 
    likes: 0 
  }, 
  { 
    title: "Go To Statement Considered Harmful", 
    author: "Edsger W. Dijkstra", 
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", 
    likes: 1
  }   
]

const blogNoTitle =   { 
  author: "Scott Jenson", 
  url: "https://jenson.org/legos/", 
  likes: 1,
  user: "5ff8c39d6cdb771e7105476f"
} 

const blogNoLikes =   { 
  title: "The Future IoT: Building Better Legos", 
  author: "Scott Jenson", 
  url: "https://jenson.org/legos/",
  user: "5ff8c39d6cdb771e7105476f"
} 

const blogNoUrl =   { 
  title: "The Future IoT: Building Better Legos", 
  author: "Scott Jenson",
  user: "5ff8c39d6cdb771e7105476f"
} 

const oneUser = {
  "username": "Hessuhopo",
  "name": "tralalaa lalaa",
  "password": "sdfsasda"
}
const shortNameUser = {
  "username": "Hes",
  "name": "tralalaa lalaa",
  "password": "sdfswerwe"
}

const shortPasswordUser = {
  "username": "Mikkihiiri",
  "name": "tralalaa lalaa",
  "password": "sdf"
}

// const testUser = {
//   "username": "SamiSuuri",
//   "password": "kissa"
// }

// const user = {
//   "username": "SamiSuuri",
//   "id": "5ff8c39d6cdb771e7105476f"
// }


module.exports = {
  listWithSixBlogs,
  listWithTwoBlogs,
  listWithOneBlog,
  listWithNoBlogs,
  blogNoTitle,
  blogNoLikes,
  blogNoUrl,
  oneUser,
  shortNameUser,
  shortPasswordUser
  //testUser
}

// const mongoose = require('mongoose')
// const supertest = require('supertest')
// const app = require('../app')
// const api = supertest(app)
// const Blog = require('../models/blog')
// const helper = require('./helper')
// const User = require('../models/user')
// const secret = require('../utils/config').SECRET
// const jwt = require('jsonwebtoken')


// describe('usernames and passwords that do not fulfill requirements are rejected', () => {

//   beforeEach(async () => {
//     let userObject = new User(helper.oneUser) 
//     await User.deleteMany({})
//     await userObject.save()
//   })

//   test('adding second instance of username gets response code 400', async () => {
//     await api
//     .post('/api/users')
//     .send(helper.oneUser) 
//     .expect(400)
//   })

//   test('adding new user with too short name gets response code 400', async () => {
//     await api
//     .post('/api/users')
//     .send(helper.shortNameUser) 
//     .expect(400)
//   })

//   test('adding new user with too short password gets response code 400', async () => {
//     await api
//     .post('/api/users')
//     .send(helper.shortPasswordUser) 
//     .expect(400)
//   })
// })



// describe('get all blogs', () => {

//   beforeEach(async () => {
//     await Blog.deleteMany({})
//     let blogObject = new Blog(helper.listWithTwoBlogs[0])
//     await blogObject.save()
//     blogObject = new Blog(helper.listWithTwoBlogs[1])
//     await blogObject.save()
//   })

//   test('all blogs are returned', async () => {
//     const response = await api.get('/api/blogs')
//     expect(response.body).toHaveLength(helper.listWithTwoBlogs.length)
//   })
  
//   test('a specific blog is within the returned blogs', async () => {
//     const response = await api.get('/api/blogs')
  
//     const contents = response.body.map(r => r.title)
  
//     expect(contents).toContain(
//       'React patterns'
//     )
//   })

//   test("returned blog has a field named 'id'", async () => {
//     const response = await api.get('/api/blogs')
//     expect(response.body[0].id).toBeDefined()
//   })
  
//   test("returned blog does not have a field named '_id'", async () => {
//     const response = await api.get('/api/blogs')
//     expect(response.body[0]._id).toBeFalsy()
//   })
// })

// describe('post new blog', () => {

//   beforeEach(async () => {

//     await Blog.deleteMany({})
//     const token = await api
//         .post('/api/login')
//         .send(helper.oneUser)
//         console.log('token:' , token)
//   //   await api
//   //       // .post('/api/blogs')
//   //       // .set('Authorization', testToken)
//   //       // .send(helper.blogNoLikes)  
//   })

//   test('number of blogs grows', async () => {
//       const response = await api.get('/api/blogs')
//       expect(response.body).toHaveLength(1)
//   })

//   test('added blog has correct author', async () => {
//     const response = await api.get('/api/blogs')
//     const contents = response.body.map(r => r.author)
//     expect(contents).toContain(
//       'Scott Jenson'
//     )
//   })
  
//   test('new blog without likes -field defined gets likes -field of 0 likes', async () => {
//     const response = await api.get('/api/blogs')
//     let savedBlog = JSON.parse(response.text)
//     expect(savedBlog[0].likes).toBe(0)
//   })
// })

// describe('bad requests', () => {

//   beforeEach(async () => {
//     await Blog.deleteMany({}) 
//   })

//   test('new blog without title gets response code 400', async () => {
//     await api
//     .post('/api/blogs')
//     .send(helper.blogNoTitle) 
//     .expect(400)
//   })
//   test('new blog without url gets response code 400', async () => {
//     await api
//     .post('/api/blogs')
//     .send(helper.blogNoAuthor) 
//     .expect(400)
//   })

//   test('deletion of non-existent blog gets response code 500', async () => {
//     await api
//     .delete('/api/blogs/5ff4d89cd3ee8c9aa5560790')
//     .send() 
//     .expect(500)
//   })
// })

// afterAll(() => {
//   mongoose.connection.close()
// })

