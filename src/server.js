//importando dependencias
const express = require('express')
const path = require('path')
const pages =  require('./pages.js')

//iniciando server express
const server = express()
//utilizando body do req
.use(express.urlencoded({extended:true}))
//utilizando arquivos estáticos
server.use(express.static('public'))
//configurando template engine(handlebars)
.set('views', path.join(__dirname,'views'))
.set('view engine', 'hbs')

server.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

server.listen(5500)