"use client";
import { ShopContextProvider } from "./context/ShopContextProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import SessionProvider from "./context/SessionProvider";
import NavBar from "./Components/Nav/NavBar";
import Footer from "./Components/Main/Footer";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ShopContextProvider>
          <>
            <NavBar />
            {children}
            <Footer />
            <Toaster position="top-right" richColors />
          </>
        </ShopContextProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
