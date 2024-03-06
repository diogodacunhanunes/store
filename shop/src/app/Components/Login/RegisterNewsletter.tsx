"use client";
import React from "react";
import { Button } from "../../../components/organisms/Button";
import { Input } from "../../../components/organisms/Input";
import Image from "next/image";
import { toast } from "sonner";
import check from "@/public/images/icons/check.svg";

export default function RegisterNewsletter() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Register to our newsletter</h1>
      <div className="w-full bg-gray-200">
        <ul className="flex flex-col gap-1 p-2">
          <li className="flex gap-2">
            <Image id="check_1" src={check} alt="check" />
            <span className="text-sm">
              Collect a discount and redeem your points for a discount
            </span>
          </li>
          <li className="flex gap-2">
            <Image id="check_2" src={check} alt="check" />
            <span className="text-sm">Easily update your information </span>
          </li>
          <li className="flex gap-2">
            <Image id="check_3" src={check} alt="check" />
            <span className="text-sm">
              Enjoy a 15% discount on your birthday{" "}
            </span>
          </li>
          <li className="flex gap-2">
            <Image id="check_4" src={check} alt="check" />
            <span className="text-sm">
              View your orders and easily update your information{" "}
            </span>
          </li>
        </ul>
      </div>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input type="email" placeholder="Email" required />
        <Button
          variant="outline"
          onClick={() => {
            const promise = () =>
              new Promise((resolve) =>
                setTimeout(
                  () =>
                    resolve(
                      "You were successfully registered to our newsletter"
                    ),
                  2000
                )
              );

            toast.promise(promise, {
              loading: "Registering...",
              success: (data) => {
                return `${data}`;
              },
              error: "Error",
            });
          }}
        >
          Register
        </Button>
      </form>
    </div>
  );
}
