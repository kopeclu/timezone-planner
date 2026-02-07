import { useState } from 'react'
import './App.css'
import ResultLayout from './layout/ResultLayout'
import SetupLayout from './layout/SetupLayout'

function App() {
  const [showResult, setShowResult] = useState(false)
  const [cities, setCities] = useState <string[]>([])

  const addCity = (city: string) => {
    setCities([...cities, city])
  }

  return (
    <>
      {showResult ?
        <ResultLayout /> :
        <SetupLayout addCity={addCity} />
      }
    </>
  )
}

export default App
