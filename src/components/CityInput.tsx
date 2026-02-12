import { useState } from 'react';
import { getSuggestions, getTimezoneInfo, validateInput } from '../utils/searchHelper';
import type { City, CityInfo } from '../types';
import SuggestionList from './SuggestionList';

type CityInputProps = {
  addCity: (city: CityInfo) => void
}

const CityInput = ({addCity}: CityInputProps) => {
  const [city, setCity] = useState("")
  const [suggestions, setSuggestions] = useState <City[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const submitCity = (cityToSubmit: City): void => {
    if (!validateInput(cityToSubmit.name))
      return // + show error input
    const finalCityForm = getTimezoneInfo(cityToSubmit)
    addCity(finalCityForm);
    setCity("")
    setShowSuggestions(false)
  }

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    submitCity(suggestions[0])
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
    <div className="flex flex-col items-center justify-center gap-1 w-lg">
      <form
        className="p-3 outline rounded-md text-md bg-blue-200 w-md flex flex-row"
        onSubmit={handleSubmit}>
        <input
          className="focus:outline-0 w-full"
          type="text"
          placeholder="Add a city"
          value={city}
          onChange={handleInput}
        />
        <button className="hover:cursor-pointer">
          Add
        </button>
      </form>
      {
        showSuggestions &&
        <SuggestionList
          suggestions={suggestions}
          onSelect={(selectedCity: City) => {
            submitCity(selectedCity)
          }}  
        />
      }
    </div>
  );
}
 
export default CityInput;