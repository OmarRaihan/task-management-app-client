import React from "react";
import Todos from "../Todos/Todos";

const Home = () => {
  return (
    <div className="mb-24">
      <div>
        <h2 className="text-center text-2xl font-bold my-10">Put Your Daily Task</h2>
        <div className="flex justify-center items-center">
          <div className="card w-96 bg-slate-300 shadow-xl rounded-lg">
            <div className="card-body">
              <input type="text" placeholder="Title" name="title" className="input w-full max-w-xs rounded-md" />
              <textarea className="textarea rounded-md" name="description" placeholder="Description"></textarea>
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
