import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const Api = axios.create({
  baseURL: "https://api.weatherapi.com/v1/",
  headers: { "Content-Type": "application/json" },
});

export const getCountryCurrent = async (country) => {
  console.log(API_KEY);
  const res = await Api.get("/current.json", {
    params: { key: API_KEY, q: country },
  });
  console.log("CLG: ", res.data);
  return res.data;
};
