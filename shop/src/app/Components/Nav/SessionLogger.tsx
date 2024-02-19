"use client";
import Image from "next/image";
import React from "react";
import user from "@/public/images/icons/icon_user.svg";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SessionLogger() {
  const userSignIn = () => {
    signIn("google");
  };

  const userSignOut = () => {
    signOut();
  };

  const { data: session } = useSession();

  return session?.user?.name ? (
    <>
      <span>Hello {session?.user?.name}</span>{" "}
      <span className="underline cursor-pointer" onClick={() => userSignOut()}>
        Sign Out
      </span>
    </>
  ) : (
    <Image
      src={user}
      alt="user"
      className="[@media(max-width:1028px)]:w-[18px] cursor-pointer"
      onClick={() => userSignIn()}
    />
  );
}
