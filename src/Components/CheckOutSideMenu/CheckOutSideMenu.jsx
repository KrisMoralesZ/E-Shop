import React, { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import './CheckOutSideMenu.css'

const CheckOutSideMenu = () => {
  const { isCheckOutSideMenuOpen, closeCheckOutsideMenu } = useContext(ShoppingCartContext)

  return (
    <aside className={`${isCheckOutSideMenuOpen ? 'flex' : 'hidden'} product-details flex-col fixed bg-white right-0 border border-black rounded-lg`}>
      <div div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon className="h-6 w-6 text-black cursor-pointer"
          onClick={() => closeCheckOutsideMenu()}></XMarkIcon>
      </div>
    </aside>
  )
}

export default CheckOutSideMenu