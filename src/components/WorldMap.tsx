import { ComposableMap, Geographies, Geography, Marker} from "react-simple-maps"
import type { CityInfo } from "../types"

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

type WorldMapProps = {
  cities: CityInfo[]
}

const WorldMap = ({cities}: WorldMapProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-blue-50 rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
      
      <ComposableMap
        projection="geoEqualEarth"
        className="w-full h-auto"
        projectionConfig={{
          center: [14, 0]
        }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#d4d4d8"
                strokeWidth={0.5}
                className="hover:fill-gray-300 transition-colors duration-200 outline-none"
              />
            ))
          }
        </Geographies>
        
        {cities.map((city) => (
          <Marker key={city.name} coordinates={[Number(city.lng), Number(city.lat)]}>
            <circle 
              r={5} 
              fill="#ffffff" 
              stroke="#ef4444"
              strokeWidth={3} 
              className="drop-shadow-md"
            />
          </Marker>
        ))}
      </ComposableMap>
      
    </div>
  );
};

export default WorldMap;