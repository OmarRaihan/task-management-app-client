import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import ToDo from "../ToDo/ToDo";

const Todos = () => {
  const [tasks, setTasks] = useState([]);
  const [isReload, setIsReload] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    // const url = `https://flannel-keener-57467.herokuapp.com/task`;

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setTasks(data));

    if (user) {
      fetch(`https://flannel-keener-57467.herokuapp.com/task/${user?.email}`, {
        method: "GET",
        headers: {},
      })
        .then((res) => res.json())
        .then((data) => {
          setTasks(data);
        });
    }
  }, [user]);
  return (
    <div className="mt-16">
      {tasks.map((task) => (
        <ToDo key={task._id} task={task} setIsReload={setIsReload} isReload={isReload}></ToDo>
      ))}
    </div>
  );
};

export default Todos;
