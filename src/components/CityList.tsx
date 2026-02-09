import type { CityInfo } from "../types";
import { getFlagUrl } from "../utils/searchHelper";

type CityListProps = {
  cities: CityInfo[]
}

const CityList = ({cities}: CityListProps) => {
  return (
    <>
      {cities.map((el) => (
        <div className="flex flex-row">
          <span>
            {el.name} - {el.timeZone}
          </span>
          <img src={getFlagUrl(el.country)} alt="" />
        </div>
      ))}
    </>
  );
}
 
export default CityList;