"use client";

import { useRouter } from "next/navigation";
import { JSX } from "react";

import { authClient } from "@/infra/auth/auth-client";

export const SignOutLabel = (): JSX.Element => {
  const router = useRouter();

  return (
    <p
      className="text-zinc-400 font-bold cursor-pointer"
      onClick={() =>
        authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/");
            },
          },
        })
      }
    >
      Logout
    </p>
  );
};
