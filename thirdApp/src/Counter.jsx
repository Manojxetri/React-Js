
import { useState } from "react";

import Button from "./Button.jsx";
function Counter(){

const[count,setCount]=useState(0)

const Increment =()=>{
    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1)

};



const Decrement =()=> setCount(count-1);
const Reset =()=>setCount(0);

return(
    <>
      <Button whileClick={Increment}></Button>
      <Button whileClick={Decrement}></Button>
      <Button whileClick={Reset}></Button>
      

      

</>
    )
}

export default Counter;