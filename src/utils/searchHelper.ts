import citiesData from 'cities.json' with { type: 'json' }
import type { City } from '../types'

const cities = citiesData as unknown as City[]
const cityNames = new Set(cities.map(c => c.name.toLowerCase()))

export const validateInput = (city: string): boolean => {
  return cityNames.has(city.toLowerCase())
}