/** @format */

import React, { useState } from "react";

function SearchBar(props) {
  const [value, setValue] = useState("");
  const [selectedItem , setSelectedItem] = useState(false);
  function onClick() {
    setValue("");
  }
  return (
    <>
      <div className="w-full bg-transparent flex items-center justify-center mt-4  h-10 p-2 border rounded-lg">
        <input
          type="text"
          className="w-11/12  border-none text-xs placeholder:text-gray-400 focus:outline-none text-gray-800 h-8 pl-2"
          placeholder={props.placeholder}
          name={props.name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button
          onClick={onClick}
          className={`mr-4 ${value ? "visible" : "invisible"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-3 text-gray-600 hover:text-gray-700">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button
          className="text-gray-700 placeholder-gray-50 w-8 h-6 bg-gray-100 border border-gray-200 rounded-sm flex items-center justify-center "
          onClick={props.onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4 text-gray-600 hover:text-gray-700">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      {value &&(
        <div className="rounded-md w-full border mt-1">
        <ul className="space-y-1 z-10">
          {props.items.filter(
            (item)=>{
                const searchedItem = value.toLowerCase();
                const newItem = item.toLowerCase();
                return searchedItem && newItem.startsWith(searchedItem)
            }
          ).map((item, index) => (
            <li
              key={index}
              onClick={() => {
                if (selectedItem === item) {
                  setSelectedItem(null);
                } else {
                  setSelectedItem(item);
                }
              }}
              className={
                item === selectedItem
                  ? "font-medium text-sm flex items-center gap-2 hover rounded-md px-3 py-1 hover:cursor-pointer"
                  : "font-medium text-sm flex items-center gap-2 rounded-md px-3 text-gray-700 hover:bg-gray-100 py-1 hover:cursor-pointer"
              }>
              {item}
            </li>
          ))}
        </ul>
      </div>
      )}
      
    </>
  );
}

export default SearchBar;
