"use client";

import "./globals.css";
import { Roboto } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "@/components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          {children}
          <ToastContainer newestOnTop position="bottom-right" theme="dark" />
        </body>
      </html>
    </QueryClientProvider>
  );
}
