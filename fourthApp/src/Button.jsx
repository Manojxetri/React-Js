import { useState } from "react"

 function Button(){

    const[message,setMessage]=useState("walk");
    
    const handleEvent =()=>{
        if(message==="walk") setMessage("stop");
        else setMessage("walk")
    }
    
    return(
       <div className="conatiner">
        <button onClick={handleEvent}>Click to stop</button>
        <h1>{message}</h1>
       </div>
    )
}
export default Button;