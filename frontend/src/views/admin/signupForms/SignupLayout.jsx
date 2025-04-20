/** @format */

import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

function SignUpLayout(props) {
  const items = [
    "admin",
    "Commercial",
    "superviseur",
    "teleconseiller",
    "client",
  ];

  const location = useLocation();

  const activeTab = location.pathname.split("/").pop().toLowerCase();

  return (
    <div className="w-full gap-0 h-full flex flex-col justify-start items-start p-5">
      <div className="w-fit flex items-center justify-start">
        <ul className="flex">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item}
                className={`cursor-pointer bg-gray-100 text-gray-600 w-fit px-4 py-2 bg border-t rounded-t-lg ${
                  activeTab === item.toLowerCase() && "bg-white"
                } `}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="overflow-y-auto w-full h-full px-4 bg-white border border-gray-100 rounded-b-xl">
        <Outlet />
      </div>
    </div>
  );
}

export default SignUpLayout;
