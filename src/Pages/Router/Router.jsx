import React from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SignIn from '../SignIn';
import NotFound from '../NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/clothes' element={<Home />} />
      <Route path='/electronics' element={<Home />} />
      <Route path='/shoes' element={<Home />} />
      <Route path='/others' element={<Home />} />
      <Route path='/my-account' element={<MyAccount />} />
      <Route path='/my-order' element={<MyOrder />} />
      <Route path='/my-orders' element={<MyOrders />} />
      <Route path='/my-orders/last' element={<MyOrder />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}

export default Router;