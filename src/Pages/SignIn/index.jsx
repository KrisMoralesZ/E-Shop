import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "@/Context/index";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import LoginForm from "@/Components/LoginForm";
import SignUpForm from "@/Components/SignUpForm";

const SignIn = () => {
  const { setLoggedIn } = useContext(ShoppingCartContext);
  const { setItem } = useLocalStorage('logged-in');

  const navigate = useNavigate()

  const handleLogIn = () => {
    setItem('logged-in');
    setLoggedIn(true);
    navigate('../home');
  }



  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center mb-6">
        <h1>WELCOME</h1>
      </div>
      <div className="flex flex-row gap-20">
        <LoginForm handleLogIn={handleLogIn} />
        <div>
          <h3>Don't have an account?</h3>
          <SignUpForm />
        </div>
      </div>

    </div>
  )
}

export default SignIn;
