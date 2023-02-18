import { daysOfTheWeek } from "./timelocation";
import { monthsNames } from "./timelocation";

export default function TimeAndLocation() {
  const weekDayNumber = new Date().getDay().toString();
  const dayNow = new Date().getDate().toString();
  const monthNow = new Date().getMonth().toString();
  const yearNow = new Date().getFullYear().toString();

  return (
    <div className="time-location-container">
      <h3>
        {daysOfTheWeek[weekDayNumber - 1]}, {dayNow} of {monthsNames[monthNow]}{" "}
        {yearNow}
      </h3>
    </div>
  );
}
