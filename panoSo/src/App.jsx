import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './assets/Card/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <div style={{width: "100%", display: "flex", gap: "35px", justifyContent: "center", flexWrap: "wrap"}}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />  
      </div>  

    </>
  )
}

export default App
