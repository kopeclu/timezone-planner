import type { City } from "../types";

type SuggestionListProps = {
  suggestions: City[],
  onSelect: (selectedCity: City) => void
}

const SuggestionList = ({suggestions, onSelect}: SuggestionListProps) => {
  return (
    <>
      {suggestions.map((city) => (
        <p key={city.name+city.lat} onClick={() => onSelect(city)}>
          {city.name}
        </p>
      ))}
    </>
  );
}
 
export default SuggestionList;