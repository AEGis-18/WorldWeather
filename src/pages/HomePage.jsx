import { useEffect, useState } from "react";
import { WorldComponent } from "../components/WorldComponent";
import useWindowDimensions from "../hooks/useWindowsDimensions";
import CurrentWeather from "../components/CurrentWeather";
import { SideInfo } from "../components/SideInfo";

export function HomePage() {
  const [country, setCountry] = useState();

  const { width } = useWindowDimensions();

  function selectCountry(data) {
    if (data) {
      setCountry(data);
    }
    console.log(country);
  }
  return (
    <div className="bg-slate-950 flex flex-col md:flex-row">
      <WorldComponent
        selectCountry={selectCountry}
        size={width}
      ></WorldComponent>
      <div className="p-4 bg-slate-900 flex-shrink-0  max-w-[300px] min-w-[200px] md:min-w-[300px]">
        <SideInfo>
          <CurrentWeather
            country={country !== null ? country : "United States"}
          ></CurrentWeather>
        </SideInfo>
      </div>
    </div>
  );
}
