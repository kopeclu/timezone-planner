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
    <>
      <label>
        Preffered time for meeting:
      </label>
      <div className="flex flex-row gap-5">
        <span>From</span>
        <input
          type="time"
          step={1800}
          value={timeInterval.start}
          onChange={(e) => handleInput(e.target.value, timeInterval.end)} />
        <span>To</span>
        <input
          type="time"
          step={1800}
          value={timeInterval.end}
          onChange={(e) => handleInput(timeInterval.start, e.target.value)} />
      </div>
    </>
  );
}
 
export default TimeRangeSelector;