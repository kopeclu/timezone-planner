import type { TimeInterval } from "../types";

type TimeRangeSelectorProps = {
  timeInterval: TimeInterval,
  setTimeInterval: (interval: TimeInterval) => void
}

const TimeRangeSelector = ({timeInterval, setTimeInterval}: TimeRangeSelectorProps) => {
  
  const handleInput = (start: string, end: string) => {
    const newTimeInterval = {start: start, end: end}
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
          value={timeInterval.start}
          onChange={(e) => handleInput(e.target.value, timeInterval.end)} />
        <span>To</span>
        <input
          type="time"
          value={timeInterval.end}
          onChange={(e) => handleInput(timeInterval.start, e.target.value)} />
      </div>
    </>
  );
}
 
export default TimeRangeSelector;