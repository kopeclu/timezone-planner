import type { City } from "../types";
import { getFlagUrl } from "../utils/searchHelper";

type SuggestionListProps = {
  suggestions: City[],
  onSelect: (selectedCity: City) => void,
  activeIndex: number,
  setActiveIndex: (index: number) => void
}

const SuggestionList = ({suggestions, onSelect, activeIndex, setActiveIndex}: SuggestionListProps) => {
  return (
    <div className="flex flex-col gap-2 bg-amber-50 w-md">
      {suggestions.map((city, index) => (
        <div
          key={city.name+city.lat+index}
          onClick={() => onSelect(city)}
          onMouseEnter={() => setActiveIndex(index)}
          className={`flex flex-row gap-2 cursor-pointer p-3 ${activeIndex === index ? "bg-gray-300" : "hover:bg-gray-100"}`}>
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