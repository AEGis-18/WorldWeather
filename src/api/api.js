import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const Api = axios.create({
  baseURL: "https://api.weatherapi.com/v1/",
  headers: { "Content-Type": "application/json" },
});

export const getCountryCurrent = async (country) => {
  const res = await Api.get("/current.json", {
    params: { key: API_KEY, q: country },
  });
  console.log("CLG: ", res.data);
  return res.data;
};

export const getCountryForecast = async (country) => {
  const res = await Api.get("/forecast.json", {
    params: { key: API_KEY, q: country, days: 3 },
  });
  console.log("CLG: ", res.data);
  return res.data;
};
