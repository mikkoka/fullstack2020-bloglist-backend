const logger = require('./logger')

const requestLogger = (request, response, next) => {
  logger.info(`${request.method} '${request.path}'`)
  next()
}

// const errorHandler = (error, request, response, next) => {
//   if (error.name === 'CastError') {
//     return response.status(400).send({
//       error: 'malformatted id'
//     })
//   } else if (error.name === 'ValidationError') {
//     return response.status(400).json({
//       error: error.message 
//     })
//   } else if (error.name === 'JsonWebTokenError') {
//     return response.status(401).json({
//       error: 'invalid token'
//     })
//   }

//   logger.error(error.message)

//   next(error)
// }

const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization')
  //console.log('auth: ', authorization)
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7)
  } else {
    request.token = null
  }
  next()
  
}

module.exports = { 
  requestLogger, 
  // errorHandler,
  tokenExtractor
}