import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import edit from "../../images/icons8-edit.svg";
import trash from "../../images/icons8-trash.svg";

const CompleteTask = () => {
  const [task, setTask] = useState({});
  const { completedId } = useParams();

  useEffect(() => {
    const url = `https://flannel-keener-57467.herokuapp.com/task/${completedId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, [completedId]);

  return (
    <div style={{ minHeight: "100vh" }} className="container mx-auto todo-list">
      <h2 className="text-center text-2xl font-bold my-10">Task Completed</h2>
      <div className="mt-4">
        <div className="flex justify-center items-center">
          {/* Completed Task Button */}
          <div className="mr-3">
            <input type="radio" name="radio-1" className="radio border-4 border-slate-900 border-opacity-60" />
          </div>
          <div className="card w-full bg-slate-300 shadow-xl rounded-lg">
            <div className="flex justify-between px-4 py-6 items-center">
              <div>
                <h4 className="text-lg font-bold text-slate-600">{task?.name}</h4>
                <p className="text-slate-700">{task?.description}</p>
              </div>
              <div className="flex gap-3">
                <div>
                  <img className="h-10 bg-slate-400 p-2 rounded-full" src={edit} alt="" />
                </div>

                <div>
                  <img className="h-10 bg-slate-400 p-2 rounded-full" src={trash} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;
