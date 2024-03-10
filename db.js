const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/nodecrud')
.then(()=> 
console.log('db connect')
).catch(()=> {
    console.log('db cant connect')
})

const crudScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
  school: {
    type: String,
    required: true,
  } ,
  class: {
    type: String,
    required: true
  }
})

const crudmodel = new mongoose.model('crud', crudScheme)
module.exports = crudmodel