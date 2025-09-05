export function extractHours(date) {
  const newTime = new Date(date);
  return newTime.getHours();
}

export function getWeekDate(date) {
  const weekday = new Date(date);
  return weekday.toLocaleDateString("en-US", { weekday: "long" });
}

export function formatHour(hour) {
  return hour < 10 ? `0${hour}:00` : `${hour}:00`;
}
