import { useState } from "react"


 function Button ({whileClick}){

    return(
        <>
      <div className="container">
            <h1>Counter</h1>
            <div className="number">{count}</div>
            <div className="button">
                <button onClick={whileClick}> Increment</button>
                <button onClick={whileClick}>Decrement</button>
                <button onClick={whileClick}>Reset</button>
            </div>
        </div>
        </>
    )
}

export default  Button

