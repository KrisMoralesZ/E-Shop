import { XMarkIcon } from "@heroicons/react/24/solid"

const OrdersCart = props => {
  const { totalPrice, totalProducts } = props

  return (
    <div className="flex justify-between items-center mb-3 border-black">
      <p className="text-sm font-light">
        <span>04.04.24</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  )
}

export default OrdersCart