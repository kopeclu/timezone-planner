import CityInput from "../components/CityInput";
import CityList from "../components/CityList";
import TimeRangeSelector from "../components/TimeRangeSelector";
import WorldMap from "../components/WorldMap";
import type { CityInfo, TimeInterval } from "../types";

type SetupLayoutProps = {
  addCity: (city: CityInfo) => void,
  cities: CityInfo[],
  removeCity: (city: CityInfo) => void,
  timeInterval: TimeInterval,
  setTimeInterval: (interval: TimeInterval) => void,
  setShowResult: (status: boolean) => void
}

const SetupLayout = ({addCity, cities, removeCity, timeInterval, setTimeInterval, setShowResult}: SetupLayoutProps) => {
  return (
    <>
      <h2 className="text-3xl">
        Add cities you want to compute with
      </h2>
      <CityInput addCity={addCity} />
      <CityList cities={cities} removeCity={removeCity} />
      <TimeRangeSelector
        timeInterval={timeInterval}
        setTimeInterval={setTimeInterval} />
      <button className="hover:cursor-pointer" onClick={() => setShowResult(true)}>
        Compute
      </button>
      <WorldMap  cities={cities} />
    </>
  );
}
 
export default SetupLayout;