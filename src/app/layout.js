import { Inter } from "next/font/google";
import "./globals.scss";
import React from "react";
import ReduxProvider from "../redux/app/provider"


export default function RootLayout({ children }) {

  return (
      <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
