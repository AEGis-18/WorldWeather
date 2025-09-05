import { useQuery } from "@tanstack/react-query";
import { getCountryCurrent } from "../api/api";

export default function CurrentWeather({ country = "Paraguay" }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["current", country],
    queryFn: () => getCountryCurrent(country),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold">{data.location.country}</h1>
      <h2 className="text-2xl font-semibold">{data.location.name}</h2>
      <p className="font-semibold">{data.current.temp_c} ºC</p>
    </div>
  );
}
