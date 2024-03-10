const express = require('express')
const app = express()
const port = 4000
const bodyParser  = require('body-parser')
const router = require('./router/routers')

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', router)

app.listen(port, ()=> {
    console.log(`port connected to ${port}`)
})