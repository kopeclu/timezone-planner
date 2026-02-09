import { useState } from 'react';
import { validateInput } from '../utils/searchHelper';

type CityInputProps = {
  addCity: (city: string) => void
}

const CityInput = ({addCity}: CityInputProps) => {
  const [city, setCity] = useState("")

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    if (!validateInput(city))
      return // + show error input
    addCity(city);
    setCity("")
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(e.target.value)
    if (city.length > 2){
      // show hint
    }
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a city"
          value={city}
          onChange={(e) => {setCity(e.target.value)}}
        />
        <button>
          Find
        </button>
      </form>
    </>
  );
}
 
export default CityInput;