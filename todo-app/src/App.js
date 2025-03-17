import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Trash, Clock, Star, Calendar } from "lucide-react";
import CalendarComponent from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./App.css";
import Auth from "./components/Auth";
import TaskList from "./components/TaskList";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Normal");
  const [time, setTime] = useState("");
  const [date, setDate] = useState(new Date());
  const [quote, setQuote] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchMotivationalQuote();
  }, []);

  const fetchMotivationalQuote = () => {
    const quotes = [
      "Stay focused and never give up!",
      "Success is the sum of small efforts repeated daily.",
      "Do something today that your future self will thank you for.",
      "Dream big, work hard, stay focused." 
    ];
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <div className="container">
      {!user ? (
        <Auth setUser={setUser} />
      ) : (
        <>
          <h1>Welcome, {user}</h1>
          <p>{quote}</p>
          <CalendarComponent onChange={setDate} value={date} />
          <TaskList tasks={tasks} setTasks={setTasks} />
          <Button onClick={() => setUser(null)}>Logout</Button>
        </>
      )}
    </div>
  );
}

