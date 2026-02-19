import { useMemo } from 'react';
import { generateSliderBackground } from '../utils/sliderHelper';
import type { CityInfo, TimeInterval } from '../types';
import { displayTime } from '../utils/timeHandler';

type TimeSliderProps = {
  cities: CityInfo[],
  interval: TimeInterval,
  sliderValue: number
  onChange: (time: number) => void
}

const TimeSlider = ({ cities, interval, sliderValue, onChange }: TimeSliderProps) => {
  const bgGradient = useMemo(() => {
    return generateSliderBackground(cities, interval);
  }, [cities, interval]);

  return (
    <div className="w-full max-w-xl mx-auto p-4 bg-white rounded-xl shadow">
      
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600 font-medium">
          Time in {cities[0]?.name || "Base City"}
        </span>
        <span className="text-2xl font-bold font-mono text-blue-600">
          {displayTime(sliderValue)}
        </span>
      </div>

      <input
        type="range"
        min="0"
        max="1410"
        step="30"
        value={sliderValue}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-4 rounded-lg outline-none cursor-pointer custom-slider"
        style={{ background: bgGradient }} 
      />
      
      <div className="flex justify-between text-xs text-gray-400 mt-2 font-mono">
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>24:00</span>
      </div>
    </div>
  );
};

export default TimeSlider;