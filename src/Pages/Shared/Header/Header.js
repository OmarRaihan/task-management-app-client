import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const menuItems =(
        <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/to-do">To-Do</Link>
        </li>
        <li>
            <Link to="/completed">Completed</Link>
        </li>
        <li>
            <Link to="/calendar">Calendar</Link>
        </li>
        </>
    )


  return (
    <div className="navbar bg-slate-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {/* <li>
              <a>To Do</a>
            </li>
            <li tabindex="0">
              <a className="justify-between">Completed</a>
            </li>
            <li>
              <a>Calendar</a>
            </li> */}
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Home</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {/* <li>
            <a className="text-lg font-semibold">To-Do</a>
          </li>
          <li tabindex="0">
            <a className="text-lg font-semibold">Completed</a>
          </li>
          <li>
            <a className="text-lg font-semibold">Calendar</a>
          </li> */}
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Header;
