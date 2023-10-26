import ToasterProvider from "./ToasterProvider/Toaster";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
