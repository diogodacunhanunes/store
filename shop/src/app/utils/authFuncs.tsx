import { signOut, signIn } from "next-auth/react";
export const userSignOut = () => {
  signOut();
};

export const userSignIn = (provider: string) => {
  signIn(provider, { callbackUrl: "/" });
};
