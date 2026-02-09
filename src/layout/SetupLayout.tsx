import CityInput from "../components/CityInput";
import CityList from "../components/CityList";
import type { CityInfo } from "../types";

type SetupLayoutProps = {
  addCity: (city: CityInfo) => void,
  cities: CityInfo[]
}

const SetupLayout = ({addCity, cities}: SetupLayoutProps) => {
  return (
    <>
      <CityInput addCity={addCity} />
      <CityList cities={cities} />
    </>
  );
}
 
export default SetupLayout;