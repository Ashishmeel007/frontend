import React, { useState } from "react";

const Signup =()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setPass]= useState("")

   const handleSubmit = () =>{
      const data ={
        name,
        email,
        pass
      }
      fetch("https://pink-splendid-agouti.cyclic.app/users/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      }).then((res) =>res.json())
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err));

      setName("");
      setEmail("");
      setPass("");
   }

  return (
    <div>
        <h3>Registration Form</h3>
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" name="username" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" name="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <br />
        <button onClick={handleSubmit}>Sign Up</button>
    </div>
  )
};

export {Signup}