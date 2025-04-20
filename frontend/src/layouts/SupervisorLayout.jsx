/** @format */

import React, { useState, useEffect } from "react";
import Sidebar from "../components/navigation/Sidebar.jsx";
import Navbar from "../components/ui/Navbar.jsx";
import AdminSidebar from "../views/admin/AdminSidebar.jsx";
import { Outlet } from "react-router-dom";

function AdminLayout(props) {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white h-screen overflow-hidden">
      <Navbar handleClick={handleClick} />
      <div className="flex justify-start items-start w-full h-screen bg-gray-50">
        <AdminSidebar isOpen={isOpen} />
        <div className="flex-1 overflow-y-auto h-full z-10 bg-gray-50 border border-gray-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
