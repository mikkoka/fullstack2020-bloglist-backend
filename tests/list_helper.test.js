const listHelper = require('../utils/list_helper')
const helper = require('./helper')


// Dummytests
test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

// totalLikes tests
describe('total likes', () => {

  test('when list has only one blog returns the number of likes for that blog', () => {
    const result = listHelper.totalLikes(helper.listWithOneBlog)
    expect(result).toBe(5)
  })

  test('List with total of 36 likes returns 36 likes', () => {
    const result = listHelper.totalLikes(helper.listWithSixBlogs)
    expect(result).toBe(36)
  })
  test('when list has no blogs returns 0 likes', () => {
    const result = listHelper.totalLikes(helper.listWithNoBlogs)
    expect(result).toBe(0)
  })
})

// favorite blog -tests
describe('favorite blog', () => {

  test('when list has only one blog returns that blog', () => {
    const result = listHelper.favoriteBlog(helper.listWithOneBlog)
    expect(result).toBe(helper.listWithOneBlog[0])
  })

  test('when list has 6 blogs returns correct blog', () => {
    const result = listHelper.favoriteBlog(helper.listWithSixBlogs)
    expect(result).toBe(helper.listWithSixBlogs[2])
  })
  test('when list has no blogs returns empty object', () => {
    const result = listHelper.favoriteBlog([helper.listWithNoBlogs])
    expect(result).toStrictEqual({})
  })
})