"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
}
