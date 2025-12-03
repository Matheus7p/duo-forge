"use client";

import { ReactNode } from "react";
import { BsDiscord } from "react-icons/bs";

import { authClient } from "@/infra/auth/auth-client";

import { Button } from "./ui/button";

export const SignInButton = (): ReactNode => {
  const handleLogin = async (): Promise<void> => {
    await authClient.signIn.social({
      provider: "discord",
      callbackURL: "/home",
    });
  };
  return (
    <Button variant={"secondary"} size={"xl"} className="text-xl font-semibold" onClick={handleLogin}><BsDiscord size={64}/>Discord</Button>
  );
};
