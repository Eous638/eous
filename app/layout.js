import { Karla } from "next/font/google";
import "./globals.css";
const karla = Karla({ subsets: ["latin"], weights: [400, 700] });
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import { Metadata } from "next";
// ... other imports

export const metadata = {
  manifest: "/manifest.json", // we are accessing our manifest file here
  title: "...",
  // ... other options
};

export default function RootLayout({ children }) {
  return (
    <html className={karla.className} lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
