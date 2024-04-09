import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SignIn from '../SignIn';
import NotFound from '../NotFound';

/**
 * 
 *  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-order/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes
 */

export const pageRoutes = [
  <Route
    path='/clothes'
    key='/clothes'
    element={<Home />}
  />,
  <Route
    path='/electronics'
    key='/electronics'
    element={<Home />}
  />,
  <Route
    path='/furnitures'
    key='/furnitures'
    element={<Home />}
  />,
  <Route
    path='/toys'
    key='/toys'
    element={<Home />}
  />,
  <Route
    path='/others'
    key='/others'
    element={<Home />}
  />,
  <Route
    path='/my-account'
    key='/my-account'
    element={<Home />}
  />,
  <Route
    path='/my-order'
    key='/my-order'
    element={<Home />}
  />,
  <Route
    path='/my-orders'
    key='/my-orders'
    element={<Home />}
  />,
  <Route
    path='/my-orders/last'
    key='/my-orders/last'
    element={<Home />}
  />,
  <Route
    path='/my-order/:id'
    key='/my-order/:id'
    element={<Home />}
  />,
  <Route
    path='/sign-in'
    key='/sign-in'
    element={<Home />}
  />,
  <Route
    path='/*'
    key='/*'
    element={<Home />}
  />,
]