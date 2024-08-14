import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axiox from 'axios'

function App() {
  const [jokes, setjokes] = useState(0)

  return (
    <>
    <h1>Chai and full stack </h1>
    <p>JOKES: {jokes}</p>
    </>
  )
}

export default App
