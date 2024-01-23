import { useState } from "react";

export function CreateTodo() {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    return <div>
        <input id="title" style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title" onChange={function(e){
            setTitle(e.target.value);
        }}></input><br/><br/>
        <input id="desc" style={{
            padding:10,
            margin:10
        }} type="text" placeholder="description" onChange={function(e){
            setDesc(e.target.value);
        }}></input><br/><br/>
        <button style={{
            padding:10,
            margin:10
        }} onClick={()=>{
            fetch("https://potential-system-7jw7gxxvp553x6q4-3000.app.github.dev/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:desc,
                    completed:false
                }),
                headers:{
                    "content-type":"application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("Todo added");
            })
        }}>Add a todo</button>
    </div>
}