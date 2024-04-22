import React, { useContext } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ShoppingCartContext } from "@/Context/index";


const SignUpForm = () => {
  const { setItem } = useLocalStorage('account');
  const { account, setAccount } = useContext(ShoppingCartContext)

  const handleSignUp = () => {
    console.log('@@@@', account)
    setAccount({ ...account.name, ...account.email, ...account.password })
    setItem(account)
  };

  return (
    <div className="flex flex-col gap-4 justify-center">
      <h1>Sign up</h1>
      <p>Name</p>
      <input
        type="text"
        placeholder="name"
        onChange={account.name}
        value={account.name}
      />
      <p>Email</p>
      <input
        type="text"
        placeholder="e-mail"
        onChange={account.email}
        value={account.email} />
      <p>Password</p>
      <input
        type="text"
        placeholder="password"
        onChange={account.password}
        value={account.password}
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