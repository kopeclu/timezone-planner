import { useState } from 'react'
import './App.css'
import ResultLayout from './layout/ResultLayout'
import SetupLayout from './layout/SetupLayout'

function App() {
  const [showResult, setShowResult] = useState(false)

  return (
    <>
      {showResult ?
        <ResultLayout /> :
        <SetupLayout />
      }
    </>
  )
}

export default App
