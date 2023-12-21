import React, { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCart from "../OrderCard";
import { ShoppingCartContext } from "../../Context";
import './CheckOutSideMenu.css'

const CheckOutSideMenu = () => {
  const { isCheckOutSideMenuOpen, closeCheckOutsideMenu, cartProducts } = useContext(ShoppingCartContext)

  return (
    <aside className={`${isCheckOutSideMenuOpen ? 'flex' : 'hidden'} product-details flex-col fixed bg-white right-0 border border-black rounded-lg`}>
      <div div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon className="h-6 w-6 text-black cursor-pointer"
          onClick={() => closeCheckOutsideMenu()}></XMarkIcon>
      </div>
      <div className="px-6 overflow-y-scroll">
        {
          cartProducts.map(product => (
            <OrderCart
              key={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
    </aside>
  )
}

export default CheckOutSideMenu