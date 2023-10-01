"use client";
import React from "react";
import { signIn } from "next-auth/react";

type Props = { text: string };

const SignInButton = ({ text }: Props) => {
  return (
    <div>
      <button 
      type="button" 
      onClick={() => {signIn("google").catch(console.error)}}
      >
        {text}
      </button>
    </div>
  );
};

export default SignInButton;
