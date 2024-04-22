import React from "react";

const LoginForm = ({ handleLogIn }) => {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <h1>Log in</h1>
      <input type="text" placeholder="e-mail" />
      <input type="text" placeholder="password" />
      <button
        className="border bg-black text-white"
        onClick={() => handleLogIn()}
      >
        Log in
      </button>
    </div>
  )
}

export default LoginForm;