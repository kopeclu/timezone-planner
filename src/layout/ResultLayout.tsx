import { useState } from "react";
import { checkTimeValidy, displayTime, timeToMinutes } from "../utils/timeHandler";
import type { CityInfo, TimeInterval } from "../types";
import TimeSlider from "../components/TimeSlider";

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

  return (
    <>
      <button onClick={() => setShowResult(false)}>
        Back
      </button>
      <TimeSlider
        cities={cities}
        interval={interval}
        sliderValue={sliderValue}
        onChange={handleChangeTime} />
      {cities.map((city, index) => {

        return (
          <div>
            <span>{city.name}</span>
            <span>{status.details[index].localTime}</span>
            <span>valid: {status.details[index].isValid ? "y" : "n"}</span>
          </div>
        )
      })}
    </>
  );
}
 
export default ResultLayout;