import type { CityInfo, TimeInterval } from "../types"
import { DateTime } from 'luxon'

export const timeToMinutes = (time: string): number => {
  const [h, m] = time.split(":").map(Number)
  return h * 60 + m
}

const isInInterval = (interval: TimeInterval, inputTime: string): boolean => {
  const from = timeToMinutes(interval.start)
  const to = timeToMinutes(interval.end)
  const time = timeToMinutes(inputTime)

  return from <= to ?
    time >= from && time <= to :
    time >= from || time <= to
}

export const checkTimeValidy = (cities: CityInfo[], interval: TimeInterval, inputTime: string) => {
  const baseTime = DateTime.fromFormat(inputTime, "HH:mm", {zone: cities[0].timeZone})

  const result = cities.map((city) => {
    const cityTime = baseTime.setZone(city.timeZone)
    const cityTimeStr = cityTime.toFormat("HH:mm")
    const isValid = isInInterval(interval, cityTimeStr);

    return {
      city: city.name,
      localTime: cityTimeStr,
      isValid: isValid
    }
  })

  const allGood = result.every(c => c.isValid)
  return {allGood, details: result}
}

export const roundTimeTo30 = (originalTime: string): string => {
  const [h, m] = originalTime.split(":").map(Number)
  const totalMinutes = h*60 + m
  const roundedMinutes = Math.round(totalMinutes / 30) * 30;

  const normalizedMinutes = roundedMinutes === 1440 ? 0 : roundedMinutes;

  const newH = Math.floor(normalizedMinutes / 60).toString().padStart(2, "0");
  const newM = (normalizedMinutes % 60).toString().padStart(2, "0");

  return `${newH}:${newM}`;
}

export const displayTime = (time: number): string => {
  const h = Math.floor(time / 60).toString().padStart(2, '0');
  const m = (time % 60).toString().padStart(2, '0');
  return `${h}:${m}`;
};

export const getFirstAvailableTime = (cities: CityInfo[], interval: TimeInterval): number => {
  if (!cities || cities.length === 0) return 720;

  for (let i = 0; i < 1440; i += 30) {
    const h = Math.floor(i / 60).toString().padStart(2, '0');
    const m = (i % 60).toString().padStart(2, '0');
    
    const { allGood } = checkTimeValidy(cities, interval, `${h}:${m}`);
    
    if (allGood) return i; // Return the minutes
  }

  return 720; // Fallback if no time works
};