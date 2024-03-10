const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/viewData', (req, res)=> {
    res.send('view Datagit ')
})

module.exports = router