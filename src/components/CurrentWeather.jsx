import { useQuery } from "@tanstack/react-query";
import { getCountryCurrent } from "../api/api";

export default function CurrentWeather({ country = "United States" }) {
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
    <>
      <p>{data.location.country}</p>
      <p>{data.location.name}</p>
      <p>{data.current.temp_c} ºC</p>
    </>
  );
}
