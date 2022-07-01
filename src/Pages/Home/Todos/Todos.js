import React, { useEffect, useState } from "react";
import ToDo from "../ToDo/ToDo";

const Todos = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("tasks.json")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  return (
    <div className="mt-16">
      {tasks.map((task) => (
        <ToDo key={task.id} task={task}></ToDo>
      ))}
    </div>
  );
};

export default Todos;
