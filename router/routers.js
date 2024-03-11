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
        res.send(error)
    }
})

router.post('/data', async(req, res)=> {
    try {
      const body = {
        name: req.body.name,
        school: req.body.school,
        class: req.body.class,
      }

      await crudmodel.create(body)
      res.send('Successful Insert data')
    } catch (error) {
        res.send(error)
    }
})

router.delete('/delete/:deleteid', async(req, res)=> {
    try {
        const deleteid = req.params.deleteid
        if(!deleteid) {
            res.send('cant Allow delete id')
        } else {
           const deleteData = await crudmodel.findByIdAndDelete(deleteid)
           if(deleteData) {
            res.send('Successful Delete Date')
           } else {
           res.send('Error while deleting data')
           }
        }
    } catch (error) {
     res.send(error)   
    }
})
module.exports = router