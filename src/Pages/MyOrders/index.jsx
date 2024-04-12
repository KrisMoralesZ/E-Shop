import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "@/Context";
import OrderCard from "@/Components/OrderCard";

const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext)

  return (
    <div>
      <div className="flex w-80 items-center relative justify-center">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {order.map((order, index) => (
        <Link key={index} to={`/e-shop/my-order/${index}`}>
          <OrderCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </div>
  )
}

export default MyOrders;
