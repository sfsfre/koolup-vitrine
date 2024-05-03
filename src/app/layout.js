import { Inter } from "next/font/google";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
 import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kool-up",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full flex flex-col items-center justify-normal gap-5">
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
