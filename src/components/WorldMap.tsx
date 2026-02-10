import { ComposableMap, Geographies, Geography, Marker} from "react-simple-maps"
import type { CityInfo } from "../types"

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

type WorldMapProps = {
  cities: CityInfo[]
}

const WorldMap = ({cities}: WorldMapProps) => {
  return (
    <ComposableMap
      projection="geoMercator"
      className="max-w-3xl">
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#949494"
            />
          ))
        }
      </Geographies>
      {cities.map((city) => (
        <Marker key={city.name} coordinates={[Number(city.lng), Number(city.lat)]}>
          <circle r={5} fill="#ffffff" stroke="#e01a1a" strokeWidth={3} />
        </Marker>
        ))}
    </ComposableMap>
  );
}
 
export default WorldMap;