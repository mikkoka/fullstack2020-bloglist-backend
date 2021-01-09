const dummy = (blogs) => {
  return 1
}

const totalLikes = array => {
  const reducer = (sum, item) => {
    return sum + item.likes
  }
  return array.reduce(reducer, 0)
}

const favoriteBlog = array => {  
  const reducer = (mostLiked, item) => {
    const currentTop = mostLiked.likes ? mostLiked.likes : 0
    if (item.likes > currentTop) return item
    else return mostLiked
  }
  return array.reduce(reducer, {})
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}