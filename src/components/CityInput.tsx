import React, { useState } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0)

  const submitCity = (cityToSubmit: City): void => {
    if (!validateInput(cityToSubmit.name))
      return // + show error input
    const finalCityForm = getTimezoneInfo(cityToSubmit)
    addCity(finalCityForm);
    setCity("")
    setShowSuggestions(false)
    setActiveIndex(-1)
  }

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    if (!showSuggestions) return // show error input
    submitCity(suggestions[activeIndex])
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value
    setCity(newValue)
    setActiveIndex(0)

    if (newValue.length > 0){
      setShowSuggestions(true)
      setSuggestions(getSuggestions(newValue))
    } else {
      setShowSuggestions(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (!showSuggestions) return

    if (e.key === "ArrowDown"){
      e.preventDefault()
      setActiveIndex(prev => Math.min(prev + 1, suggestions.length - 1))
    } else if (e.key === "ArrowUp"){
      e.preventDefault()
      setActiveIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === "Enter"){
      e.preventDefault()
      submitCity(suggestions[activeIndex])
    }
  }
  
  return (
    <div className="flex flex-col items-center justify-center gap-1 w-full max-w-md">
      <form
        className="flex flex-row w-full max-w-md bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-gray-200 transition-all"
        onSubmit={handleSubmit}>
        <input
          className="w-full px-4 py-2 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
          type="text"
          placeholder="Add a city"
          value={city}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <button className="px-5 py-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-colors duration-200 cursor-pointer text-gray-800 font-medium border-l border-gray-300">
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
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      }
    </div>
  );
}
 
export default CityInput;