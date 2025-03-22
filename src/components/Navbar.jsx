import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"allCampaign"}>All Campaign</NavLink>
      </li>
      <li>
        <NavLink to={"addCampaign"}>Add New Campaign</NavLink>
      </li>
      <li>
        <NavLink to={"myCampaign"}>My Campaign</NavLink>
      </li>
      <li>
        <NavLink to={"donation"}>My Donations</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 p-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  navbar"
          >
            {links}
          </ul>
        </div>
        <Link to={'/'} className="logo">Crowdcube</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 navbar">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to={'login'} className={'button'}>Login</Link>
      </div>
    </div>
  );
}
