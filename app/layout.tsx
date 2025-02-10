import React from "react";
import "@/app/_styles/globals.css";
import { workSans } from "@/app/_styles/font";
import { Toaster } from "react-hot-toast";

type metadata = {
  title: {
    template: string;
    default: string;
  };
  description: string;
};

export const metadata: metadata = {
  title: {
    template: "%s - YC Directory",
    default: "Home - YC Directory",
  },
  description:
    "A web application that lists startups funded by Y Combinator (YC), one of the most prestigious startup accelerators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${workSans?.className} antialiased`}>
        {children}

        <Toaster
          toastOptions={{
            success: {
              iconTheme: {
                primary: "black",
                secondary: "white",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
