import React, { useContext } from "react";
import { ShoppingCartContext } from "@/Context/index";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import LoginForm from "@/Components/LoginForm";

const SignIn = () => {
  const { setLoggedIn } = useContext(ShoppingCartContext)
  const { setItem } = useLocalStorage('logged-in')

  const handleLogIn = () => {
    setItem('logged-in')
    setLoggedIn(true)
  }

  return (
    <>
      <h1>WELCOME</h1>
      <LoginForm handleLogIn={handleLogIn} />
      <h3>Don't have an account?</h3>
      <button>Sign in</button>
    </>
  )
}

export default SignIn;
