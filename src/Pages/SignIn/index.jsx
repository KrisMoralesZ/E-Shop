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
    <div>
      <h1>Signin</h1>
      <button onClick={() => handleSignInClick()}>Click Me</button>
    </div>

  )
}

export default SignIn;
