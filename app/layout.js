import ToasterProvider from "./ToasterProvider/Toaster";
import "./globals.css";
import { Inter } from "next/font/google";
import ContextProvider from "@/app/context/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notify",
  description: "Secure your notes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <ToasterProvider />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
