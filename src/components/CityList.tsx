import type { CityInfo } from "../types";
import { getFlagUrl } from "../utils/searchHelper";
import { CloseIcon } from "./icons/CloseIcon";

type CityListProps = {
  cities: CityInfo[],
  removeCity: (city: CityInfo) => void
}

const CityList = ({cities, removeCity}: CityListProps) => {
  return (
    <>
      {cities.map((el) => (
        <div className="flex flex-row">
          <span>
            {el.name} - {el.timeZone}
          </span>
          <img src={getFlagUrl(el.country)} alt="" />
          <button onClick={() => removeCity(el)}>
            <CloseIcon size={16} color="red" />
          </button>
        </div>
      ))}
    </>
  );
}
 
export default CityList;