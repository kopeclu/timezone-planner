import { useState } from "react";
import { checkTimeValidy } from "../utils/timeHandler";
import type { CityInfo, TimeInterval } from "../types";

type ResultLayoutProps = {
  cities: CityInfo[],
  interval: TimeInterval,
  setShowResult: (status: boolean) => void
}

const ResultLayout = ({cities, interval, setShowResult}: ResultLayoutProps) => {
  const [sliderValue, setSliderValue] = useState("14:00");
  const status = checkTimeValidy(cities, interval, sliderValue);

  return (
    <>
      <button onClick={() => setShowResult(false)}>
        Back
      </button>
      <input type="time" value={sliderValue} onChange={(e) => setSliderValue(e.target.value)} />
      <span>valid: {status.allGood ? "y" : "n"}</span>
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