import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "@/Context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const Navbar = () => {
  const { cartProducts, loggedIn, setSearchByCategory, setLoggedIn } = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4';

  const { getItem, removeItem } = useLocalStorage('logged-in');

  useEffect(() => {
    if (getItem('logged-in')) {
      setLoggedIn(true);
    }
  }, [getItem, setLoggedIn]);

  const handleLogOut = () => {
    removeItem('logged-in');
    setLoggedIn(false);
  }

  return (
    <nav className="flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light">
      {loggedIn ? (
        <>
          <ul className="flex items-center gap-3">
            <li className="font-semibold">
              <NavLink
                to='/e-shop/home'
                onClick={() => setSearchByCategory(null)}
              >
                Shop-e
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/e-shop/clothes'
                onClick={() => setSearchByCategory('clothes')}
                className={({ isActive }) => isActive ? activeStyle : undefined}
              >
                Clothes
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/e-shop/electronics'
                onClick={() => setSearchByCategory('electronics')}
                className={({ isActive }) => isActive ? activeStyle : undefined}
              >
                Electronics
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/e-shop/furnitures'
                onClick={() => setSearchByCategory('furniture')}
                className={({ isActive }) => isActive ? activeStyle : undefined}
              >
                Furnitures
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/e-shop/shoes'
                onClick={() => setSearchByCategory('shoes')}
                className={({ isActive }) => isActive ? activeStyle : undefined}
              >
                Shoes
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/e-shop/others'
                onClick={() => setSearchByCategory(null)}
                className={({ isActive }) => isActive ? activeStyle : undefined}
              >
                Others
              </NavLink>
            </li>
          </ul>
          <ul className="flex items-center gap-3">
            <li className="text-black/60">
              email
            </li>
            <li>
              <NavLink to='/e-shop/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink to='/e-shop/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>
                My Account
              </NavLink>
            </li>
            <li onClick={() => handleLogOut()}>
              <NavLink to='/e-shop/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}>
                Sign Out
              </NavLink>
            </li>
            <li>
              <NavLink to='/e-shop/cart' className={({ isActive }) => isActive ? activeStyle : undefined}>
                <div className="flex justify-center items-center">
                  <ShoppingCartIcon className="h-6 w-6 text-black" />
                  <div>
                    {cartProducts.length}
                  </div>
                </div>
              </NavLink>
            </li>
          </ul>
        </>
      ) : (
        <ul className="flex items-center justify-between gap-3 w-full">
          <li className="font-semibold">
            <NavLink
              to='/e-shop/home'
              onClick={() => setSearchByCategory(null)}
            >
              Shop-e
            </NavLink>
          </li>
          <li>
            <NavLink to='/e-shop/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}>
              Sign In
            </NavLink>
          </li>
        </ul>
      )
      }
    </nav >
  )
}
export default Navbar;