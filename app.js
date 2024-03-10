const express = require('express')
const app = express()
const port = 4000
const bodyParser  = require('body-parser')

app.listen(port, ()=> {
    console.log(`port connected to ${port}`)
})