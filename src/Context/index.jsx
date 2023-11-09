import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false)
  const openProductDetails = () => setIsProductDetailsOpen(true)
  const closeProductDetails = () => setIsProductDetailsOpen(false)
  const [productToShow, setProductToShow] = useState({})


  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailsOpen,
      openProductDetails,
      closeProductDetails,
      productToShow,
      setProductToShow
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}