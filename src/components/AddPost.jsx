import { useState } from "react";


const AddNote = () =>{
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");

     const handleSubmit = ()=> {
        const notedata={
            title,
            body,
        }
        fetch("https://pink-splendid-agouti.cyclic.app/notes/create",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            authorization:`Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(notedata) 
      }).then(res=>res.json())
      .then(res=>console.log(res))
      .catch(err=>console.log(err));
      setTitle("");
      setBody("");
     }

    return (
        <div>
            <h3>Add a new Note</h3>
            <label htmlFor="titl">Note title</label>
        <br />
        <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <br />
        <label htmlFor="body">Note Body</label>
        <br />
        <input type="text" name="body" value={body} onChange={(e)=>setBody(e.target.value)}/>
        <br />
        <button onClick={handleSubmit}>Add Post</button>
        </div>
    )
};

export {AddNote}