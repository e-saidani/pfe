import React, { useState, useRef, useEffect} from "react";
import '../../styles/form/menuStyle.css'

function Menu(props) {
  const menuRef = useRef();
  const [isOpen , setIsOpen] =useState(false);
  const [option, setOption] = useState("Option");

  function handleClick() {
    
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={menuRef} className="w-fit text-xs bg-white relative">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={
          isOpen
            ? "font-medium text-sm flex  items-center gap-2 rounded-md px-2 py-1 hover:cursor-pointer"
            : "font-medium text-sm flex items-center gap-2  rounded-md px-2 text-gray-700  py-1 hover:cursor-pointer"
        }>
        <p className="flex z-0 items-center gap-2">{option}</p>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{
              width: "1rem",
              height: "1.5rem",
              transition: " width 0.2s ease, height 0.2s ease",
            }}
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            style={{
              width: "1rem",
              height: "1.5rem",
              transition: " width 0.2s ease, height 0.2s ease",
            }}
            >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        )}
      </button>
      {isOpen && (
          <ul className="space-y- z-50">
            {props.items.map((item, index) => (
              <li
                key={index}
                className="font-medium flex items-center gap-2 rounded-md px-3 text-gray-700 py-1 hover:cursor-pointer">
                <a href="#"
                  className="flex items-center gap-2">
                  {item}
                </a>
              </li>
            ))}
          </ul>
      )}
    </div>
  );}

export default Menu
