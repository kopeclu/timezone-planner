import { ComposableMap, Geographies, Geography} from "react-simple-maps"

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const WorldMap = () => {
  return (
    <>
      <ComposableMap projection="geoMercator">
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
      </ComposableMap>
    </>
  );
}
 
export default WorldMap;