import { useState } from 'react'
import './App.css'
import ResultLayout from './layout/ResultLayout'
import SetupLayout from './layout/SetupLayout'
import type { CityInfo } from './types'

function App() {
  const [showResult, setShowResult] = useState(false)
  const [cities, setCities] = useState <CityInfo[]>([])

  const addCity = (city: CityInfo) => {
    setCities([...cities, city])
  }

  return (
    <>
      {showResult ?
        <ResultLayout /> :
        <SetupLayout addCity={addCity} cities={cities} />
      }
    </>
  )
}

export default App
