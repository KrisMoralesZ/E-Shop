import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "@/Context/index";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const LoginForm = () => {
  const {
    account,
    email,
    password,
    setEmail,
    setPassword,
    setLoggedIn,
    setAccount
  } = useContext(ShoppingCartContext);

  const { setItem } = useLocalStorage('logged-in');
  const { getItem } = useLocalStorage('account');

  const navigate = useNavigate();

  useEffect(() => {
    if (getItem()) {
      setAccount(getItem());
    };
  }, []);

  const handleLogIn = () => {
    if (account.email === email && account.password === password) {
      setItem('logged-in');
      setLoggedIn(true);
      navigate('../home');
    } else {
      console.log('Wrong email or Password');
      // TODO: Add error message
    };
  };

  return (
    <div className="flex flex-col gap-4 justify-center rounded-b-md p-6 shadow-md">
      <h1>Log in</h1>
      <input
        type="text"
        placeholder="e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="border bg-black text-white rounded-md"
        onClick={() => handleLogIn()}
      >
        Log in
      </button>
    </div>
  )
}

export default LoginForm;