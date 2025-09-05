import { extractHours, formatHour } from "../utils/time";

export function DisplayHour({ hour }) {
  return (
    <>
      <img src={hour.condition.icon} />
      <p className="font-semibold">{hour.condition.text}</p>
      <p>{formatHour(extractHours(hour.time))}</p>
      <p>{hour.temp_c} ºC</p>
    </>
  );
}
