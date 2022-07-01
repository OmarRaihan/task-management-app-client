import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import Todos from "../Todos/Todos";

const Home = () => {
  const [user] = useAuthState(auth);
  const [isReload, setIsReload] = useState(false);
  const { id } = useParams();

  const addTask = (event) => {
    event.preventDefault();

    const task = {
      email: user?.email,
      name: event.target.name.value,
      description: event.target.description.value,
    };

    // Task Added to Task Collection
    axios.post("https://flannel-keener-57467.herokuapp.com/task", task).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        event.target.reset();
      }
    });

    // Update Task
    // const url = `https://flannel-keener-57467.herokuapp.com/task/${id}`;
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(task),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("success", data);
    //     setIsReload(!isReload);
    //     event.target.reset();
    //   });
  };

  return (
    <div className="mb-24">
      <div>
        <h2 className="text-center text-2xl font-bold my-10 text-slate-700">Put Your Daily Task</h2>
        <div className="flex justify-center items-center">
          <div className="card w-96 bg-slate-300 shadow-xl rounded-lg">
            <div className="card-body">
              <form className="grid grid-cols-1 gap-2 justify-items-center" onSubmit={addTask}>
                <input type="email" placeholder="Email" name="email" className="input w-full max-w-xs rounded-md" value={user?.email} disabled />

                <input type="text" placeholder="Title" name="name" className="input w-full max-w-xs rounded-md" required />

                <textarea className="textarea w-full rounded-md" name="description" rows="3" placeholder="Description" required></textarea>

                <input type="submit" value="Add Task" className="btn border-0 mt-4 w-44 max-w-xs" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------ */}
      {/* Task Lists */}
      <Todos />
    </div>
  );
};

export default Home;
