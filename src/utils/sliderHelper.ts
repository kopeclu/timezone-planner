import type { CityInfo, TimeInterval } from "../types";
import { checkTimeValidy } from "./timeHandler";

export const generateSliderBackground = (
  cities: CityInfo[], 
  interval: TimeInterval
) => {
  // If no cities, just return a grey bar
  if (!cities || cities.length === 0) {
    return "linear-gradient(to right, #e5e7eb 0%, #e5e7eb 100%)";
  }

  const stops: string[] = [];
  const totalMinutes = 1440;
  const step = 30;

  for (let i = 0; i < totalMinutes; i += step) {
    // 1. Calculate the percentage width of this 30-min block
    const startPct = (i / totalMinutes) * 100;
    const endPct = ((i + step) / totalMinutes) * 100;

    // 2. Convert 'i' (minutes) to "HH:mm" format for your base city
    const h = Math.floor(i / 60).toString().padStart(2, '0');
    const m = (i % 60).toString().padStart(2, '0');
    const timeStr = `${h}:${m}`;

    // 3. Check if this specific time works for everyone
    const { allGood } = checkTimeValidy(cities, interval, timeStr);
    
    // 4. Assign colors
    const color = allGood ? "#4ade80" : "#f87171";

    // 5. Create "hard stops" in the gradient so it doesn't blur
    stops.push(`${color} ${startPct}%`, `${color} ${endPct}%`);
  }

  return `linear-gradient(to right, ${stops.join(', ')})`;
};