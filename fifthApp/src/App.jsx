import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List></List>
    </>
  )
}

export default App
