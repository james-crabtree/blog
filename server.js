import * as Path from 'node:path'
import fsPromises from 'node:fs/promises'
import express from 'express'
import hbs from 'express-handlebars'
import routes from './router.js'

const server = express()
const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.resolve('server/views'))
server.use(express.urlencoded({ extended: false }))
server.use('/', routes)

export default server