import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '@/Context'
import Router from '../Router/Router'
import Navbar from '@/Components/Navbar'
import './App.css'



const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
