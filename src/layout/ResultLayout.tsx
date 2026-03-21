import { useEffect, useState } from "react";
import { checkTimeValidy, displayTime, getFirstAvailableTime, timeToMinutes } from "../utils/timeHandler";
import type { CityInfo, TimeInterval } from "../types";
import TimeSlider from "../components/TimeSlider";
import { getFlagUrl } from "../utils/searchHelper";

type ResultLayoutProps = {
  cities: CityInfo[],
  interval: TimeInterval,
  setShowResult: (status: boolean) => void
}

const ResultLayout = ({cities, interval, setShowResult}: ResultLayoutProps) => {
  const [freeSlotFound, setFreeSlotfound] = useState(false);
  const [sliderValue, setSliderValue] = useState(timeToMinutes(interval.start));
  const status = checkTimeValidy(cities, interval, displayTime(sliderValue));

  const handleChangeTime = (time: number): void => {
    setSliderValue(time)
  }

  useEffect(() => {
    const {time, success} = getFirstAvailableTime(cities, interval);
    setSliderValue(time);
    setFreeSlotfound(success);
  }, [cities, interval]);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-8 py-8 px-4">
      <div className="w-full flex justify-start max-w-3xl">
        <button 
          onClick={() => setShowResult(false)}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm cursor-pointer"
        >
          <span>&larr;</span> Back to Setup
        </button>
      </div>
      
      <div className="text-center space-y-2 max-w-2xl">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Meeting Time Overview
        </h2>
        {!freeSlotFound ? (
          <p className="text-lg font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg py-2 px-4 inline-block mt-2">
            No overlapping time slots found in your preferred interval.
          </p>
        ) : status.allGood ? (
          <p className="text-lg font-medium text-green-700 bg-green-50 border border-green-200 rounded-lg py-2 px-4 inline-block mt-2">
            This time works perfectly for everyone!
          </p>
        ) : (
          <p className="text-lg font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded-lg py-2 px-4 inline-block mt-2">
            Some participants are outside their preferred hours.
          </p>
        )}
      </div>

      <div className="w-full mb-8 mt-2">
        <TimeSlider
          cities={cities}
          interval={interval}
          sliderValue={sliderValue}
          onChange={handleChangeTime} 
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-4xl mt-4">
        {cities.map((city, index) => {
          const detail = status.details[index];
          const isValid = detail.isValid;

          return (
            <div
              key={city.name + index}
              className={`flex items-center gap-4 px-5 py-3 rounded-xl border shadow-sm transition-all duration-200 ${
                isValid 
                  ? "bg-green-50 border-green-200 text-green-900" 
                  : "bg-red-50 border-red-200 text-red-900"
              }`}
            >
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider opacity-70">
                  {city.name}
                </span>
                <span className="text-2xl font-mono font-bold">
                  {detail.localTime}
                </span>
              </div>
              <img 
                src={getFlagUrl(city.country)} 
                alt={`${city.country} flag`} 
                className="rounded-sm shadow-sm ml-2 object-cover" 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
 
export default ResultLayout;