import type { CityInfo } from "../types";
import { getFlagUrl } from "../utils/searchHelper";
import { CloseIcon } from "./icons/CloseIcon";

type CityListProps = {
  cities: CityInfo[],
  removeCity: (city: CityInfo) => void
}

const CityList = ({cities, removeCity}: CityListProps) => {
  if (cities.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-3xl">
      {cities.map((el, index) => (
        <div
          key={el.name+index}
          className="flex flex-row items-center gap-3 bg-white border border-gray-300 shadow-sm px-4 py-2 rounded-xl text-gray-800 transition-shadow hover:shadow-md">
          <span className="font-medium text-nowrap">
            {el.name}
          </span>
          <img src={getFlagUrl(el.country)} alt="" className="rounded-sm shadow-sm"/>
          <button
            onClick={() => removeCity(el)}
            className="flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
            aria-label={`Remove ${el.name}`}
          >
            <CloseIcon size={16} color="red" />
          </button>
        </div>
      ))}
    </div>
  );
}
 
export default CityList;