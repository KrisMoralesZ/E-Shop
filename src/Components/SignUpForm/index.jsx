import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ShoppingCartContext } from "@/Context/index";


const SignUpForm = () => {
  const {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    setLoggedIn
  } = useContext(ShoppingCartContext);

  const navigate = useNavigate();

  const { setItem } = useLocalStorage('account');
  const { setItem: setLogin } = useLocalStorage('logged-in');


  const handleSignUp = () => {
    setItem({ name: name, email: email, password: password });
    setLogin('logged-in')
    navigate('../home');
    setLoggedIn(true);
  };

  return (
    <div className="flex flex-col gap-4 justify-center rounded-b-md p-6 shadow-md">
      <h1>Sign up</h1>
      <p>Name</p>
      <input
        className="border-spacing-1"
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Email</p>
      <input
        type="text"
        placeholder="e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>Password</p>
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="border bg-black text-white rounded-md"
        onClick={() => handleSignUp()}
      >
        Sign Up
      </button>
    </div>
  )
};

export default SignUpForm;