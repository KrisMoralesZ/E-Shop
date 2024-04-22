import React, { useContext } from "react";
import { ShoppingCartContext } from "@/Context/index";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const SignIn = () => {
  const { setLoggedIn } = useContext(ShoppingCartContext)
  const { setItem } = useLocalStorage('logged-in')

  const handleSignInClick = () => {
    setItem('logged-in')
    setLoggedIn(true)
  }

  return (
    <>
      <h1>WELCOME</h1>
      <div className="flex flex-col gap-4 justify-center">
        <h1>Log in</h1>
        <input type="text" placeholder="e-mail" />
        <input type="text" placeholder="password" />
        <button className="border bg-black text-white" onClick={() => handleSignInClick()}>Log in</button>
      </div>
    </>
  )
}

export default SignIn;
