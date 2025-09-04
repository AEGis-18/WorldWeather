import { useEffect, useState } from "react";
import { WorldComponent } from "../components/WorldComponent";
import useWindowDimensions from "../hooks/useWindowsDimensions";
import CurrentWeather from "../components/CurrentWeather";

export function HomePage() {
  const [country, setCountry] = useState();

  const { width } = useWindowDimensions();

  function selectCountry(data) {
    setCountry(data);
    console.log(country);
  }
  return (
    <div className="bg-slate-950 flex flex-col md:flex-row">
      <WorldComponent
        selectCountry={selectCountry}
        size={width}
      ></WorldComponent>
      <div className="bg-red-300 flex-shrink-0 min-w-[200px] md:min-w-[300px]">
        <CurrentWeather country={country}></CurrentWeather>
      </div>
    </div>
  );
}
