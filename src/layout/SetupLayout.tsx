import CityInput from "../components/CityInput";

type SetupLayoutProps = {
  addCity: (city: string) => void
}

const SetupLayout = ({addCity}: SetupLayoutProps) => {
  return (
    <>
      <CityInput addCity={addCity} />
    </>
  );
}
 
export default SetupLayout;