import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StudentCrad } from './StudentCard'
import Counter from './Counter'

function App() {

  return (
    <>
      {/* <StudentCrad name={"Rosis Sharma"} age={18} rollNo={20} grade={"4th sem"} ></StudentCrad>
      <StudentCrad name={"Bardan Karki"} age={19} rollNo={20} grade={"4th sem"} ></StudentCrad>
      <StudentCrad name={"Alen Pokhrel"} age={18} rollNo={20} grade={"4th sem"} ></StudentCrad>
      <StudentCrad name={"Manoj khanal"} age={18} rollNo={20} grade={"4th sem"} ></StudentCrad>
      <StudentCrad name={"Roshan Khanal"} age={24} rollNo={20} grade={"4th sem"} ></StudentCrad> */}
      {/* <StudentCrad name={"Rosis Sharma"} age={"18"} rollNo={"20"} grade={"4th sem"} ></StudentCrad> */}

      <Counter></Counter>
    </>

  )
}

export default App


