import CityInput from "../components/CityInput";
import CityList from "../components/CityList";
import type { CityInfo } from "../types";

type SetupLayoutProps = {
  addCity: (city: CityInfo) => void,
  cities: CityInfo[],
  removeCity: (city: CityInfo) => void
}

const SetupLayout = ({addCity, cities, removeCity}: SetupLayoutProps) => {
  return (
    <>
      <CityInput addCity={addCity} />
      <CityList cities={cities} removeCity={removeCity} />
    </>
  );
}
 
export default SetupLayout;