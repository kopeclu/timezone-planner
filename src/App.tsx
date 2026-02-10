import { useState } from 'react'
import './App.css'
import ResultLayout from './layout/ResultLayout'
import SetupLayout from './layout/SetupLayout'
import type { CityInfo } from './types'

function App() {
  const [showResult, setShowResult] = useState(false)
  const [cities, setCities] = useState <CityInfo[]>([])

  const addCity = (city: CityInfo): void => {
    if (cities.find((el) => el.name === city.name))
      return
    setCities([...cities, city])
  }

  const removeCity = (city: CityInfo): void => {
    const newCities = cities.filter((c) => c.name !== city.name)
    setCities(newCities)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 m-10">
      {showResult ?
        <ResultLayout /> :
        <SetupLayout addCity={addCity} cities={cities} removeCity={removeCity} />
      }
    </div>
  )
}

export default App
