import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [coordinate,setCoordinate]=useState({x:0,y:0})
  // const [state,setState]=useState({x:0,y:0})
  // function handleIncrement(){
  //   state.x=state.x+1;
  //   state.y=state.y+1;

  //   setState({...state,state});
  //   console.log(state);
  function handleCursor(e){
    coordinate.x=e.clientX;
    coordinate.y=e.clientY;
    setCoordinate({...coordinate,coordinate});
    console.log(coordinate);
  }
  
  return(
    <div onPointerMove={(e)=>handleCursor(e)}
    style={{position:"relative",height:"100vh",width:"100vw"}}>
      <button 
      style={{
        position: "fixed",
        top: coordinate.y,
        left: coordinate.x
      }}>
        halliyo lachak lachak tyo kamr re
      </button>
  </div>
  
)
}

export default App
