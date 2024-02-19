"use client";
import Image from "next/image";
import React from "react";
import user from "@/public/images/icons/icon_user.svg";
import { signIn } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

export default function SessionLogger({ pageProps }: any) {
  const userSignIn = () => {
    signIn("google");
  };
  return (
    <SessionProvider session={pageProps?.session}>
      <Image
        src={user}
        alt="user"
        className="[@media(max-width:1028px)]:w-[18px] cursor-pointer"
        onClick={() => userSignIn()}
      />
    </SessionProvider>
  );
}
