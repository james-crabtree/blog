import server from './server.js'

const port = 2500

server.listen(port, function () {
  console.log('Server is operating on http://localhost:' + port)
})
