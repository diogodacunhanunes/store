"use client";
import { userSignIn } from "@/app/utils/authFuncs";
import { Input } from "../../../components/organisms/Input";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import React from "react";
import google from "@/public/images/icons/google.svg";

export default function LoginGoogle() {
  return (
    <>
      <div>
        <button
          type="button"
          className="text-white  w-full  bg-[#B88E2F] hover:bg-[#B88E2F]/90 focus:ring-4 focus:outline-none focus:ring-[#B88E2F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-start gap-4 dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          onClick={() => userSignIn("google")}
        >
          <Image src={google} alt="google" width={20} />
          Sign in with Google
        </button>
      </div>
      <form className="flex flex-col gap-4">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button variant="default">Sign In</Button>
      </form>
    </>
  );
}
