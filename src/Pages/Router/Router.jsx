import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/Components/Layout";
import Home from '@/Pages/Home';
import MyAccount from '@/Pages/MyAccount';
import MyOrder from '@/Pages/MyOrder';
import MyOrders from '@/Pages/MyOrders';
import SignIn from '@/Pages/SignIn';
import NotFound from '@/Pages/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path="/e-shop/" element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route path='clothes' element={<Home />} />
        <Route path='electronics' element={<Home />} />
        <Route path='furnitures' element={<Home />} />
        <Route path='shoes' element={<Home />} />
        <Route path='others' element={<Home />} />
        <Route path='my-account' element={<MyAccount />} />
        <Route path='my-order' element={<MyOrder />} />
        <Route path='my-orders' element={<MyOrders />} />
        <Route path='my-orders/last' element={<MyOrder />} />
        <Route path='my-order/:id' element={<MyOrder />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default Router;