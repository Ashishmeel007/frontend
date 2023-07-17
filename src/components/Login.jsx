import React, { useState } from "react";

const Login =()=>{
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

   const handleSubmit = () =>{
      const data ={
        email,
        pass
      }
      fetch("https://pink-splendid-agouti.cyclic.app/users/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      }).then(res=>res.json())
      .then((res)=>{
        console.log(res)
        localStorage.setItem("token",res.token)
      })
      .catch(err=>console.log(err));

      setEmail("");
      setPass("");
   }

  return (
    <div>
        <h3>Login Form</h3>
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" name="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <br />
        <button onClick={handleSubmit}>Login!</button>
    </div>
  )
};

export {Login}