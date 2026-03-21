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
    <div className="w-full bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden flex flex-col">
      {suggestions.map((city, index) => (
        <div
          key={city.name+city.lat+index}
          onClick={() => onSelect(city)}
          onMouseEnter={() => setActiveIndex(index)}
          className={`flex flex-row items-center justify-between px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors ${
            activeIndex === index ? "bg-gray-100 text-gray-900" : "bg-white text-gray-600 hover:bg-gray-50"
          }`}>
          <span>
            <span className="font-medium">{city.name}</span>
            <span className="text-gray-400"> - {city.country}</span>
          </span>
          <img src={getFlagUrl(city.country)} alt="flag" className="shadow-md rounded-sm" />
        </div>
      ))}
    </div>
  );
}
 
export default SuggestionList;