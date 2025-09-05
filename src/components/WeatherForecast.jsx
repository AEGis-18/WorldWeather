import { useQuery } from "@tanstack/react-query";
import { getCountryForecast } from "../api/api";
import { DisplayDay } from "./DisplayDay";

export function WeatherForecast({ country = "Paraguay" }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["current", country],
    queryFn: () => getCountryForecast(country),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="border-solid border-2 flex-1 border-slate-800 rounded-sm p-2 shadow-lg shadow-slate-950">
        <h1 className="text-4xl font-bold">{data.location.country}</h1>
        <h2 className="text-2xl font-semibold">{data.location.name}</h2>
        <img src={data.current.condition.icon} />
        <div className="font-semibold">
          <p>
            {data.current.temp_c} ºC ({data.current.temp_f} ºF)
          </p>
          <p>Feels like {data.current.feelslike_c} ºC</p>
          <p>Humidity: {data.current.humidity}%</p>
        </div>
      </div>

      <div className=" border-solid border-2 border-slate-800 rounded-sm p-2 shadow-lg shadow-slate-950">
        <ul>
          {data.forecast.forecastday.map((day) => {
            return (
              <li key={day.date}>
                <DisplayDay data={day}></DisplayDay>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
