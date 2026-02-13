import type { CityInfo, TimeInterval } from "../types"
import { DateTime } from 'luxon'

const timeToMinutes = (time: string): number => {
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