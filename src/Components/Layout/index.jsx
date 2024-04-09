import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import CheckOutSideMenu from '../../Components/CheckOutSideMenu/CheckOutSideMenu';

const Layout = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <Navbar />
      {/* <Outlet />
      <CheckOutSideMenu /> */}
    </div>
  )
}
export default Layout