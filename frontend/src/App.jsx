import { useState } from 'react'
import { CreateTodo } from './componenets/createTodo'
import './App.css'
import { Todos } from './componenets/Todos'

function App() {

  const [todos,setTodos] = useState([]);

  fetch("https://potential-system-7jw7gxxvp553x6q4-3000.app.github.dev/todos")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.obj);
  })

  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
