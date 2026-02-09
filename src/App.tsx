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

  const removeCity = (city: CityInfo): void => {
    const newCities = cities.filter((c) => c.name !== city.name)
    setCities(newCities)
  }

  return (
    <>
      {showResult ?
        <ResultLayout /> :
        <SetupLayout addCity={addCity} cities={cities} removeCity={removeCity} />
      }
    </>
  )
}

export default App
