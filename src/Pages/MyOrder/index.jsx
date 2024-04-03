import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCart from "../../Components/OrderCard";
import Layout from "../../Components/Layout";

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext)
  return (
    <Layout>
      <h3>
        MyOrder
      </h3>
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
