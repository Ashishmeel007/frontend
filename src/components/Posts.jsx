import { useEffect } from "react";



const Posts =() =>{
    useEffect(()=>{
        fetch("https://pink-splendid-agouti.cyclic.app/notes",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                authorization:`Bearer ${localStorage.getItem("token")}`
            }
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    })
    return (
        <div>
            <h2>To see Posts,go to console.....</h2>
        </div>
    )
};

export {Posts}