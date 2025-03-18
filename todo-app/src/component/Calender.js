import CalendarComponent from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Calendar({ setDate, date }) {
  return <CalendarComponent onChange={setDate} value={date} />;
}
