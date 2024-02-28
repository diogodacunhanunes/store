"use client";
import { Button } from "../../components/organisms/Button";
import { Input } from "../../components/organisms/Input";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import google from "@/public/images/icons/google.svg";

import check from "@/public/images/icons/check.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { userSignIn } from "../utils/authFuncs";
import LoginGoogle from "../Components/Login";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
      return;
    }
  }, [router, session]);

  return (
    <div className="w-full h-full py-4 gap-4 self-center flex flex-col justify-center items-center lg:flex-row lg:py-20 lg:justify-center lg:items-center lg:gap-36 ">
      <div className="w-[70%] py-10 max-w-[520px] flex flex-col gap-4 lg:w-full">
        <LoginGoogle />
      </div>
      <div className="w-[70%] h-[1px] bg-gray-200 lg:w-[1px] lg:h-[250px]">
        &nbsp;
      </div>
      <div className="py-2 w-[70%] mb-16 lg:w-auto lg:mb-0">
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
      </div>
    </div>
  );
}
