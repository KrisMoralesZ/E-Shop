import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/Components/Navbar";

const Layout = ({ children }) => {

  return (
    <div className="flex flex-col items-center mt-20">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout;