import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import OrdersCart from "../../Components/OrdersCard";

const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center">
        <h1>My Orders</h1>
      </div>
      {order.map((order, index) => {
        <Link key={index} to={`/my-order/${order.id}`}>
          <OrdersCart
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      })}
    </Layout>
  )
}

export default MyOrders;
