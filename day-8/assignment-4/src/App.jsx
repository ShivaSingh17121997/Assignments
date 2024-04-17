import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './Pages/UserForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Assignment -4 </h1>
      <UserForm/>

    </div>
  )
}

export default App
