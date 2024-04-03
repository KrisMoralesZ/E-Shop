import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCart from "../OrderCard";
import { ShoppingCartContext } from "../../Context";
import { totalPrice } from "../../utils";
import './CheckOutSideMenu.css'

const CheckOutSideMenu = () => {
  const { isCheckOutSideMenuOpen, closeCheckOutsideMenu, cartProducts, setCartProducts, order, setOrder } = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id !== id)
    setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '03.04.24',
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }

    setOrder([...order, orderToAdd])

    setCartProducts([])
  }

  return (
    <aside className={`${isCheckOutSideMenuOpen ? 'flex' : 'hidden'} product-details flex-col fixed bg-white right-0 border border-black rounded-lg`}>
      <div div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon className="h-6 w-6 text-black cursor-pointer"
          onClick={() => closeCheckOutsideMenu()}></XMarkIcon>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {
          cartProducts.map(product => (
            <OrderCart
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className="px-6 mb-6">
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className="bg-black w-full text-white rounded-lg" onClick={() => handleCheckout()}>
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckOutSideMenu