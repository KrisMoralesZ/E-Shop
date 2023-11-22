import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart
  const [count, setCount] = useState(0)

  // Product Detail
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false)
  const openProductDetails = () => setIsProductDetailsOpen(true)
  const closeProductDetails = () => setIsProductDetailsOpen(false)

  // CheckOutSideMenu
  const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false)
  const openCheckOutsideMenu = () => setIsCheckOutSideMenuOpen(true)
  const closeCheckOutsideMenu = () => setIsCheckOutSideMenuOpen(false)

  // Product Details
  const [productToShow, setProductToShow] = useState({})

  // Shopping Cart
  const [cartProducts, setCartProducts] = useState([])


  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailsOpen,
      isCheckOutSideMenuOpen,
      openCheckOutsideMenu,
      closeCheckOutsideMenu,
      openProductDetails,
      closeProductDetails,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}