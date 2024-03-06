"use client";
import Image from "next/image";
import React from "react";
import user from "@/public/images/icons/icon_user.svg";
import Link from "next/link";
import UserDropdownMenu from "./UserDropdownMenu";
import { useSession } from "next-auth/react";
import { userSignOut } from "@/app/utils/authFuncs";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/organisms/Avatar";

export default function SessionLogger() {
  const { data: session } = useSession();

  return session?.user?.name ? (
    <div className="flex gap-4">
      <UserDropdownMenu signOut={userSignOut}>
        <Avatar>
          <AvatarImage
            src={session?.user?.image || "https://github.com/shadcn.png"}
          />
          <AvatarFallback>
            <span className="bg-[#B88E2F] rounded-full px-3 py-1 text-white">
              {session?.user?.name[0]}
            </span>
          </AvatarFallback>
        </Avatar>
      </UserDropdownMenu>
    </div>
  ) : (
    <Link href={"/login"}>
      <Image
        src={user}
        alt="user"
        className="[@media(max-width:1028px)]:w-[18px] cursor-pointer"
      />
    </Link>
  );
}
