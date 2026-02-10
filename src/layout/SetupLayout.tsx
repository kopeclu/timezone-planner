import CityInput from "../components/CityInput";
import CityList from "../components/CityList";
import WorldMap from "../components/WorldMap";
import type { CityInfo } from "../types";

type SetupLayoutProps = {
  addCity: (city: CityInfo) => void,
  cities: CityInfo[],
  removeCity: (city: CityInfo) => void
}

const SetupLayout = ({addCity, cities, removeCity}: SetupLayoutProps) => {
  return (
    <>
      <h2 className="text-3xl">
        Add cities you want to compute with
      </h2>
      <CityInput addCity={addCity} />
      <CityList cities={cities} removeCity={removeCity} />
      <WorldMap  cities={cities} />
    </>
  );
}
 
export default SetupLayout;