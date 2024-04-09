import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Get Products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  // Search and filtered items
  const [searchByTitle, setSearchByTitle] = useState(null);
  const [searchByCategory, setSearchByCategory] = useState(null);

  // Shopping Cart
  const [count, setCount] = useState(0);

  // Product Detail
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);

  // CheckOutSideMenu
  const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);

  // Product Details
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart Order
  const [order, setOrder] = useState([]);

  return (
    <ShoppingCartContext.Provider value={{
      items,
      filteredItems,
      searchByTitle,
      searchByCategory,
      count,
      isProductDetailsOpen,
      isCheckOutSideMenuOpen,
      productToShow,
      cartProducts,
      order,
      setItems,
      setFilteredItems,
      setSearchByTitle,
      setSearchByCategory,
      setCount,
      setIsCheckOutSideMenuOpen,
      setIsProductDetailsOpen,
      setProductToShow,
      setCartProducts,
      setOrder
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}