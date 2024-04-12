import { BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '@/Context';
import Router from '../Router/Router';
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

export default App;
