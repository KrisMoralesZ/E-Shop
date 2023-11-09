import React from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import './ProductDetails.css'

const ProductDetails = () => {
  return (
    <aside className="product-details flex flex-col fixed bg-white right-0 border border-black rounded-lg">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Details</h2>
        <XMarkIcon className="h-6 w-6 text-black" ></XMarkIcon>
      </div>
    </aside>
  )
}

export default ProductDetails