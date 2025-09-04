import { useEffect, useState } from "react";
import { WorldComponent } from "../components/WorldComponent";
import useWindowDimensions from "../hooks/useWindowsDimensions";

export function HomePage() {
  const [country, setCountry] = useState(null);

  const { width } = useWindowDimensions();

  function selectCountry(data) {
    setCountry(data);
    console.log(data);
  }
  return (
    <div className="bg-slate-950 flex flex-col md:flex-row">
      <WorldComponent
        selectCountry={selectCountry}
        size={width}
      ></WorldComponent>
      <div className="bg-red-300 flex-shrink-0 min-w-[200px] md:min-w-[300px]">
        <p>{}</p>
      </div>
    </div>
  );
}
