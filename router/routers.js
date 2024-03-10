const express = require('express')
const router = express.Router()

router.get('/viewData', (req, res)=> {
    res.send('view Datagit ')
})