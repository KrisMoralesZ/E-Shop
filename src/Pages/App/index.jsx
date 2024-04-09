import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../Router';
import { ShoppingCartProvider } from '../../Context';
import './App.css';

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
