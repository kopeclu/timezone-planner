type CityListProps = {
  cities: string[]
}

const CityList = ({cities}: CityListProps) => {
  return (
    <>
      {cities.map((el) => (
        <p>{el}</p>
      ))}
    </>
  );
}
 
export default CityList;