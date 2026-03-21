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
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-10 py-12 px-4">
      {/* HERO / WELCOME SECTION */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight flex items-center justify-center gap-3">
          Timezone Planner
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
          Scheduling a meeting across the globe? Add your team's cities and find the perfect overlap in seconds.
        </p>
      </div>

      {/* INPUT CONTROLS SECTION */}
      <div className="flex flex-col items-center gap-8 w-full">
        <TimeRangeSelector
          timeInterval={timeInterval}
          setTimeInterval={setTimeInterval}
        />
        <CityInput addCity={addCity} />
      </div>

      {/* LIST OF CITIES */}
      <CityList cities={cities} removeCity={removeCity} />

      {/* COMPUTE BUTTON */}
      <button
        className="px-8 py-3 rounded-xl border border-gray-300 bg-gray-200 hover:bg-gray-300 active:scale-95 transition-all duration-200 cursor-pointer text-gray-800 font-semibold text-lg shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => setShowResult(true)}
        disabled={cities.length === 0}
      >
        Compute Times
      </button>

      {/* THE MAP */}
      <div className="w-full mt-4">
        <WorldMap cities={cities} />
      </div>
    </div>
  );
}
 
export default SetupLayout;