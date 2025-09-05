import { DisplayHour } from "./DisplayHour";
import { extractHours } from "../utils/time";
import { getWeekDate } from "../utils/time";

export function DisplayDay({ data }) {
  return (
    <>
      <h3 className="font-bold text-xl p-2">{getWeekDate(data.date)}</h3>
      <ul className="flex flex-wrap space-x-2 space-y-2">
        {selectHours(data.hour).map((hour) => {
          return (
            <li
              key={hour.time}
              className=" flex-shrink-0 w-[90px] h-[200px] border-solid border-2 border-slate-800 rounded-sm p-2 shadow-lg shadow-slate-950"
            >
              <DisplayHour hour={hour}></DisplayHour>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function selectHours(hours) {
  const res = hours.filter((hour) => extractHours(hour.time) % 3 === 0);
  return res;
}
