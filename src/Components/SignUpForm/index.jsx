import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ShoppingCartContext } from "@/Context/index";


const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setLoggedIn } = useContext(ShoppingCartContext);

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
    <div className="flex flex-col gap-4 justify-center">
      <h1>Sign up</h1>
      <p>Name</p>
      <input
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
        className="border bg-black text-white"
        onClick={() => handleSignUp()}
      >
        Sign Up
      </button>
    </div>
  )
};

export default SignUpForm;