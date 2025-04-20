/** @format */
/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar(props) {
  const location = useLocation();

  const sidebarItems = [
    {
      label: "Dashboard",
      to: "/dashboard",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
          />
        </svg>
      ),
    },
    {
      label: "Calendar",
      to: "/calendar",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
      ),
    },
    {
      label: "Profile",
      to: "/profile",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ),
    },
    ...(props.items || []),
  ];

  return (
    <>
      {props.isOpen ? (
        <div className="overflow-hidden sticky animate-slideInLeft md:animate-none flex h-full bg-white shadow-md w-[90px] top-[70px] left-0 z-40 md:relative md:w-[270px] md:top-0 items-stretch">
          <div className="h-full flex flex-col pl-8 pt-5 justify-start items-start text-xs uppercase  text-gray-400 relative w-full">
            <h3 className="pb-4">MENU</h3>
            <ul className="ease-in-out w-[90px] md:w-[238px] flex flex-col gap-5 text-gray-500 items-start  justify-start ">
              {sidebarItems.map((item, idx) => (
                <li className="w-full" key={idx}>
                  <Link
                    to={item.to}
                    className={`flex justify-start items-center gap-2 w-full h-[40px] rounded-l-xl ${
                      location.pathname === item.to
                        ? "bg-[#ECF3FF] text-[#3641F5]"
                        : "hover:bg-[#ECF3FF] focus:bg-[#ECF3FF] focus:text-[#3641F5]"
                    }`}
                  >
                    {item.svg}
                    <span className="text-sm hidden md:block font-medium">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="ease-in-out bottom-24 md:bottom-5 gap-4 pl-7 font-medium text-xs md:text-sm text-gray-700 justify-self-end flex flex-col pt-4 fixed left-0 w-[90px] md:w-[270px] border-t border-gray-200">
              <div className="hidden md:block">
                <h3>{props.full_name}</h3>
                <h4 className="text-xs">{props.post}</h4>
              </div>
              <button className="flex w-fit p-2 border-gray-300 justify-start border bg-[#ECF3FF]">
                <svg
                  className="block fill-gray-500 group-hover:fill-gray-700 dark:group-hover:fill-gray-300"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.1007 19.247C14.6865 19.247 14.3507 18.9112 14.3507 18.497L14.3507 14.245H12.8507V18.497C12.8507 19.7396 13.8581 20.747 15.1007 20.747H18.5007C19.7434 20.747 20.7507 19.7396 20.7507 18.497L20.7507 5.49609C20.7507 4.25345 19.7433 3.24609 18.5007 3.24609H15.1007C13.8581 3.24609 12.8507 4.25345 12.8507 5.49609V9.74501L14.3507 9.74501V5.49609C14.3507 5.08188 14.6865 4.74609 15.1007 4.74609L18.5007 4.74609C18.9149 4.74609 19.2507 5.08188 19.2507 5.49609L19.2507 18.497C19.2507 18.9112 18.9149 19.247 18.5007 19.247H15.1007ZM3.25073 11.9984C3.25073 12.2144 3.34204 12.4091 3.48817 12.546L8.09483 17.1556C8.38763 17.4485 8.86251 17.4487 9.15549 17.1559C9.44848 16.8631 9.44863 16.3882 9.15583 16.0952L5.81116 12.7484L16.0007 12.7484C16.4149 12.7484 16.7507 12.4127 16.7507 11.9984C16.7507 11.5842 16.4149 11.2484 16.0007 11.2484L5.81528 11.2484L9.15585 7.90554C9.44864 7.61255 9.44847 7.13767 9.15547 6.84488C8.86248 6.55209 8.3876 6.55226 8.09481 6.84525L3.52309 11.4202C3.35673 11.5577 3.25073 11.7657 3.25073 11.9984Z"
                    fill=""
                  ></path>
                </svg>
                <span className="hidden md:block">Se deconnecter</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden hidden  md:flex md:h-full md:bg-white md:shadow-md md:w-[90px] items-stretch">
          <div className="h-full flex flex-col pl-8 pt-5 justify-start items-start text-xs uppercase  text-gray-400 w-[90px] ">
            <h3 className="pb-4">MENU</h3>
            <ul className=" w-[90px] flex flex-col gap-5 text-gray-500 items-start  justify-start ">
              {sidebarItems.map((item, idx) => (
                <li className="w-full" key={idx}>
                  <Link
                    to={item.to}
                    className={`flex justify-start items-center gap-2 w-full h-[40px] rounded-l-xl ${
                      location.pathname === item.to
                        ? "text-[#3641F5] bg-[#ECF3FF]"
                        : "hover:bg-[#ECF3FF] hover:text-[#3641F5] focus:bg-[#ECF3FF] focus:text-[#3641F5]"
                    }`}
                  >
                    {item.svg}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="ease-in-out bottom-5 gap-4 pl-7 font-medium text-xs  text-gray-700 justify-self-end flex flex-col pt-4 fixed left-0 w-[90px] border-t border-gray-200">
            <button className="flex w-fit p-2 border-gray-300 justify-start border bg-[#ECF3FF]">
              <svg
                className="block fill-gray-500 group-hover:fill-gray-700 dark:group-hover:fill-gray-300"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.1007 19.247C14.6865 19.247 14.3507 18.9112 14.3507 18.497L14.3507 14.245H12.8507V18.497C12.8507 19.7396 13.8581 20.747 15.1007 20.747H18.5007C19.7434 20.747 20.7507 19.7396 20.7507 18.497L20.7507 5.49609C20.7507 4.25345 19.7433 3.24609 18.5007 3.24609H15.1007C13.8581 3.24609 12.8507 4.25345 12.8507 5.49609V9.74501L14.3507 9.74501V5.49609C14.3507 5.08188 14.6865 4.74609 15.1007 4.74609L18.5007 4.74609C18.9149 4.74609 19.2507 5.08188 19.2507 5.49609L19.2507 18.497C19.2507 18.9112 18.9149 19.247 18.5007 19.247H15.1007ZM3.25073 11.9984C3.25073 12.2144 3.34204 12.4091 3.48817 12.546L8.09483 17.1556C8.38763 17.4485 8.86251 17.4487 9.15549 17.1559C9.44848 16.8631 9.44863 16.3882 9.15583 16.0952L5.81116 12.7484L16.0007 12.7484C16.4149 12.7484 16.7507 12.4127 16.7507 11.9984C16.7507 11.5842 16.4149 11.2484 16.0007 11.2484L5.81528 11.2484L9.15585 7.90554C9.44864 7.61255 9.44847 7.13767 9.15547 6.84488C8.86248 6.55209 8.3876 6.55226 8.09481 6.84525L3.52309 11.4202C3.35673 11.5577 3.25073 11.7657 3.25073 11.9984Z"
                  fill=""
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;