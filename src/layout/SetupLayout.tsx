import CityInput from "../components/CityInput";
import CityList from "../components/CityList";

type SetupLayoutProps = {
  addCity: (city: string) => void,
  cities: string[]
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