import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = () => {
    setDate(date);
  };

  return (
      <div className="flex justify-center mt-20">
        <Calendar onChange={onChange} value={date} />
      </div>
  );
};

export default MyCalendar;
