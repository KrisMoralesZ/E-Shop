import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";

const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {order.map((order, index) => (
        <Link key={index} to={`/my-order/${index}`}>
          <OrderCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  )
}

export default MyOrders;
