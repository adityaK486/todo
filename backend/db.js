const mongoose = require('mongoose');
//mongodb+srv://admin:6PCVzM6QRfewxHn1@cluster0.zgep3ee.mongodb.net/
mongoose.connect("mongodb+srv://admin:6PCVzM6QRfewxHn1@cluster0.zgep3ee.mongodb.net/")
const todoSchema = mongoose.Schema({
  title:String,
  description:String,
  completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports = {
  todo
}