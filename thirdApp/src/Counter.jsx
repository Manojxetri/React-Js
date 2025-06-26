import { use } from "react";
import { useState } from "react";
function Counter(){
const[count,setCount]=useState(1)
const Increment =()=>setCount(count+1);
const Decrement =()=> setCount(count-1);
const Reset =()=>setCount(0);
console.log(count);
    return(
        <div className="container">
            <h1>Counter</h1>
            <div className="number">{count}</div>
            <div className="button">
                <button onClick={Increment}> Increment</button>
                <button onClick={Decrement}>Decrement</button>
                <button onClick={Reset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;