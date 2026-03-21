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
  const [sliderValue, setSliderValue] = useState(timeToMinutes(interval.start));
  const status = checkTimeValidy(cities, interval, displayTime(sliderValue));

  const handleChangeTime = (time: number): void => {
    setSliderValue(time)
  }

  useEffect(() => {
    const firstAvailable = getFirstAvailableTime(cities, interval);
    setSliderValue(firstAvailable); 
  }, [cities, interval]);

  return (
    <>
      <button onClick={() => setShowResult(false)}>
        Back
      </button>
      {/* Add a message if we found a free slot */}
      {
        status.allGood ?
        <p>That's a free slot!</p> :
        <p>That's not a free slot.</p>
      }
      <TimeSlider
        cities={cities}
        interval={interval}
        sliderValue={sliderValue}
        onChange={handleChangeTime} />
      <div className="flex flex-wrap gap-3 max-w-xl">
        {cities.map((city, index) => (
          <div
            key={city.name+index}
            className={`flex flex-row gap-3 p-3 rounded-md justify-center w-fit ${status.details[index].isValid ? "bg-green-400" : "bg-red-400"}`}>
            <span className="text-nowrap">
              {city.name} {status.details[index].localTime}
            </span>
            <img src={getFlagUrl(city.country)} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
 
export default ResultLayout;