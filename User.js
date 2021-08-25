const mongoose=require('mongoose')

const TodoSchema=mongoose.Schema({
  
  TodoItems:
  { type:String, required:true},

  Todo_List :
  { type:String, required:false},

 
 })

 module.exports=mongoose.model('TODO',TodoSchema)