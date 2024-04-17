import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactList from './Problem/Problem1'
import HeavyComputationComponent from './Problem/Problem3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
     <ContactList/>
      
      <HeavyComputationComponent/>
    </div>
  )
}

export default App
