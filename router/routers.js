const express = require('express')
const router = express.Router()
const crudmodel = require('../db')

router.get('/viewData', async(req, res)=> {
    try {
        const data = await crudmodel.find()
        if(data.length > 0) {
            res.send(data)
        } else {
            res.send('no data found')
        }
    } catch (error) {
        
    }
})

module.exports = router