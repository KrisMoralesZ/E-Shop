import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../../Components/Layout'
import { pageRoutes } from './pageRoutes';



const Router = () => {
  <Routes>
    <Route path='/' key='/' element={<Layout />}>
      {pageRoutes.map((route) => route)}
    </Route>
  </Routes>

}
export default Router;