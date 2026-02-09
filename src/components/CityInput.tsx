import { useState } from 'react';
import { getSuggestions, validateInput } from '../utils/searchHelper';
import type { City } from '../types';
import SuggestionList from './SuggestionList';

type CityInputProps = {
  addCity: (city: string) => void
}

const CityInput = ({addCity}: CityInputProps) => {
  const [city, setCity] = useState("")
  const [suggestions, setSuggestions] = useState <City[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const submitCity = (cityName: string): void => {
    if (!validateInput(cityName))
      return // + show error input
    addCity(cityName);
    setCity("")
    setShowSuggestions(false)
  }

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    submitCity(city)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value
    setCity(newValue)

    if (newValue.length > 0){
      setShowSuggestions(true)
      setSuggestions(getSuggestions(newValue))
    } else {
      setShowSuggestions(false)
    }
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a city"
          value={city}
          onChange={handleInput}
        />
        <button>
          Add
        </button>
      </form>
      {
        showSuggestions &&
        <SuggestionList
          suggestions={suggestions}
          onSelect={(selectedCity: City) => {
            submitCity(selectedCity.name)
          }}  
        />
      }
    </>
  );
}
 
export default CityInput;