import { useEffect, useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://flannel-keener-57467.herokuapp.com/task")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  return [tasks, setTasks];
};

export default useTasks;
