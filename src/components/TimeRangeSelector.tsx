import type { TimeInterval } from "../types";
import { roundTimeTo30 } from "../utils/timeHandler";

type TimeRangeSelectorProps = {
  timeInterval: TimeInterval,
  setTimeInterval: (interval: TimeInterval) => void
}

const TimeRangeSelector = ({timeInterval, setTimeInterval}: TimeRangeSelectorProps) => {
  
  const handleInput = (start: string, end: string) => {
    const newStart = roundTimeTo30(start)
    const newEnd = roundTimeTo30(end)
    const newTimeInterval = {start: newStart, end: newEnd}
    setTimeInterval(newTimeInterval)
  }

  return (
    <fieldset className="flex flex-col gap-2 border-0 p-0 m-0">
      <legend className="text-gray-700 font-medium mb-2 w-full text-center">
        Preferred time for meeting:
      </legend>
      
      <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-4">
        <label className="flex flex-row items-center gap-2 cursor-pointer">
          <span className="text-gray-600">From</span>
          <input
            type="time"
            step={1800}
            value={timeInterval.start}
            onChange={(e) => handleInput(e.target.value, timeInterval.end)} 
            className="p-1 border rounded"
          />
        </label>

        <label className="flex flex-row items-center gap-2 cursor-pointer">
          <span className="text-gray-600">To</span>
          <input
            type="time"
            step={1800}
            value={timeInterval.end}
            onChange={(e) => handleInput(timeInterval.start, e.target.value)} 
            className="p-1 border rounded"
          />
        </label>
      </div>
    </fieldset>
  );
}
 
export default TimeRangeSelector;