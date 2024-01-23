const express = require('express');
const {createTodo,updateTodo}  = require('./type.js');
const {todo} = require('./db.js');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({}));
app.listen(3000);

app.post('/todo',async (req,res)=>{
  const createPayLoad = req.body;
  const parsePayLoad = createTodo.safeParse(createPayLoad);
  if(!parsePayLoad.success){
    res.status(411).json({
      msg:"You sent the wrong inputs",
    })
    return;
  }
  
  await todo.create({
    title:createPayLoad.title,
    description:createPayLoad.description,
    completed:false,
  })

  res.json({
    msg:"Todo is created"
  })
})

app.get('/todos',async (req,res)=>{
 const obj = await todo.find({});
 res.json({
   obj
 });
})

app.put('/completed',async (req,res)=>{
  const updatePayLoad = req.body;
  const parsePayLoad = updateTodo.safeParse(updatePayLoad);
  if(!parsePayLoad.success){
    res.status(411).json({
      msg:"You sent the wrong inputs",
    })
    return;
  }
  const obj = todo.findOne({_id:req.body.id},{completed:true})
  res.json({
    msg:"Todo is marked as completed"
  })
})
