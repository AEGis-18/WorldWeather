import { useEffect, useState } from "react";
import { WorldComponent } from "../components/WorldComponent";
import useWindowDimensions from "../hooks/useWindowsDimensions";
import CurrentWeather from "../components/CurrentWeather";
import { WeatherForecast } from "../components/WeatherForecast";
import { SideInfo } from "../components/SideInfo";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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
    <div className="bg-slate-950 flex flex-col md:flex-row text-white">
      <TransformWrapper>
        <TransformComponent>
          <WorldComponent
            selectCountry={selectCountry}
            size={width}
          ></WorldComponent>
        </TransformComponent>
      </TransformWrapper>
      <div className="p-4 bg-slate-900 flex-grow w-full md:w-[300px] flex-shrink-0">
        <SideInfo>
          {/* <CurrentWeather country={country}></CurrentWeather> */}
          <WeatherForecast country={country}></WeatherForecast>
        </SideInfo>
      </div>
    </div>
  );
}
