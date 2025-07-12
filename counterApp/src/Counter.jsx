import { useState } from "react";
import Button from "./Button.jsx";
function Counter(){

    const [count,setCount] = useState(0);

    function Increment(){
        setCount(count+1);
    }

    function Decrement(){
        setCount(count-1);
    }
    
    function Reset(){
        setCount(0);
    }
    return(
        <div>
    <h1>{count}</h1>
      <Button hamleClickGardaYoHos={Increment} title="Increment" />
      <Button hamleClickGardaYoHos={Decrement} title="Decrement" />
      <Button hamleClickGardaYoHos={Reset} title="Reset" />
    </div>)
}
export default Counter