import React, { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import './ProductDetails.css'
import { ShoppingCartContext } from "../../Context";

const ProductDetails = () => {
  const { isProductDetailsOpen, closeProductDetails, productToShow } = useContext(ShoppingCartContext)

  return (
    <aside className={`${isProductDetailsOpen ? 'flex' : 'hidden'} product-details flex-col fixed bg-white right-0 border border-black rounded-lg`}>
      <div div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Details</h2>
        <XMarkIcon className="h-6 w-6 text-black cursor-pointer"
          onClick={() => closeProductDetails()}></XMarkIcon>
      </div>
      <figure className="px-6 mb-6">
        <img className="w-full h-full rounded-lg"
          src={productToShow.images}
          alt={productToShow.title} />
      </figure>
      <p className="flex flex-col px-6">
        <span className="font-medium text-2xl">{productToShow.price}</span>
        <span className="font-medium text-md">{productToShow.title}</span>
        <span className="font-light text-md">{productToShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetails