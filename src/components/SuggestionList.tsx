import type { City } from "../types";
import { getFlagUrl } from "../utils/searchHelper";

type SuggestionListProps = {
  suggestions: City[],
  onSelect: (selectedCity: City) => void
}

const SuggestionList = ({suggestions, onSelect}: SuggestionListProps) => {
  return (
    <div className="flex flex-col gap-2 bg-amber-50 p-3">
      {suggestions.map((city, index) => (
        <div key={city.name+city.lat+index} onClick={() => onSelect(city)}
          className="flex flex-row">
          <span>
            {city.name} - {city.country}
          </span>
          <img src={getFlagUrl(city.country)} alt="flag" />
        </div>
      ))}
    </div>
  );
}
 
export default SuggestionList;