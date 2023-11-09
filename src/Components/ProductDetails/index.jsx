import React, { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import './ProductDetails.css'
import { ShoppingCartContext } from "../../Context";

const ProductDetails = () => {
  const { isProductDetailsOpen, closeProductDetails } = useContext(ShoppingCartContext)
  return (
    <aside className={`${isProductDetailsOpen ? 'flex' : 'hidden'} product-details flex-col fixed bg-white right-0 border border-black rounded-lg`}>
      <div div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Details</h2>
        <XMarkIcon className="h-6 w-6 text-black"
          onClick={() => closeProductDetails()}></XMarkIcon>
      </div>
    </aside>
  )
}

export default ProductDetails