import cities from 'cities.json' with { type: 'json' }
import { useState } from 'react';

type CityInputProps = {
  addCity: (city: string) => void
}

const CityInput = ({addCity}: CityInputProps) => {
  const [city, setCity] = useState("")

  const handleSubmit = () => {
    addCity(city);
    setCity("")
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