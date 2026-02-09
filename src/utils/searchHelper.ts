import citiesData from 'cities.json' with { type: 'json' }
import type { City, CityInfo } from '../types'
import tz_lookup from 'tz-lookup'

const cities = citiesData as unknown as City[]
const cityNames = new Set(cities.map(c => c.name.toLowerCase()))

export const validateInput = (city: string): boolean => {
  return cityNames.has(city.toLowerCase())
}

export const getSuggestions = (input: string): City[] => {
  if (!input) return [];

  const lowerInput = input.toLowerCase()
  return cities
    .filter(city => city.name.toLowerCase().startsWith(lowerInput))
    .slice(0, 5)
}

export const getTimezoneInfo = (city: City): CityInfo => {
  const timeZoneId = tz_lookup(Number(city.lat), Number(city.lng))

  return {
    name: city.name,
    lat: city.lat,
    lng: city.lng,
    timeZone: timeZoneId,
    country: city.country
  }
}

export const getFlagUrl = (countryCode: string): string => {
  return `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
}