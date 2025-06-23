import Greeting from './Greeting.jsx'
import {Hello,Namaste} from './Greeting.jsx'
import Name from './Name.jsx'
function App(){
  return (
    <>
     <Hello/>
     <Namaste firstName={"manoj"} lastName={"khanal"}/>
     <Namaste firstName={"Bardan"} lastName={"karki"}/>
     <Namaste firstName={"rosis"} lastName={"sharma"}/>
     <Name/>
    </>
  )
}

export default App;
