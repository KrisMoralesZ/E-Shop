import React from "react";
import LoginForm from "@/Components/LoginForm";
import SignUpForm from "@/Components/SignUpForm";

const SignIn = () => (
  <div className="flex justify-center flex-col">
    <div className="flex justify-center mb-6">
      <h1>WELCOME</h1>
    </div>
    <div className="flex flex-row gap-20">
      <LoginForm />
      <div>
        <h3>Don't have an account?</h3>
        <SignUpForm />
      </div>
    </div>
  </div>
);

export default SignIn;
