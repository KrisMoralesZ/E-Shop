import { BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '@/Context';
import Router from '@/Pages/Router/Router';
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
