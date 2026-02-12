import type { CityInfo } from "../types";
import { getFlagUrl } from "../utils/searchHelper";
import { CloseIcon } from "./icons/CloseIcon";

type CityListProps = {
  cities: CityInfo[],
  removeCity: (city: CityInfo) => void
}

const CityList = ({cities, removeCity}: CityListProps) => {
  return (
    <div className="flex flex-wrap gap-3 max-w-xl">
      {cities.map((el, index) => (
        <div
          key={el.name+index}
          className="flex flex-row gap-3 bg-emerald-100 p-3 rounded-md justify-center w-fit">
          <span className="text-nowrap">
            {el.name}
          </span>
          <img src={getFlagUrl(el.country)} alt="" />
          <button onClick={() => removeCity(el)} className="cursor-pointer">
            <CloseIcon size={16} color="red" />
          </button>
        </div>
      ))}
    </div>
  );
}
 
export default CityList;