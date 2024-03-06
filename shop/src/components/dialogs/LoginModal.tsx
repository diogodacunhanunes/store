"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/organisms/Dialog";
import LoginGoogle from "@/app/Components/Login/LoginGoogle";

export default function LoginModal({
  isOpen,
  setIsOpen,
  action,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  action: "like" | "share" | "add to cart" | "";
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Please Login</DialogTitle>
          <DialogDescription>
            To {action} a product, first you need to login.
            <div className="w-[70%] py-10 max-w-[520px] flex flex-col gap-4 lg:w-full">
              <LoginGoogle />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
