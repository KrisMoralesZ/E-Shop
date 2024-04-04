import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import OrderCart from "../../Components/OrderCard";
import Layout from "../../Components/Layout";

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext)
  return (
    <Layout>
      <div className="flex w-80 items-center relative mb-6 justify-center">
        <Link to='/my-orders' className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="px-6">
        {
          order?.slice(-1)[0]?.products.map(product => (
            <OrderCart
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder;
