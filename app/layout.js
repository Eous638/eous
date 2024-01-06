import { Karla } from "next/font/google";
import "./globals.css";
const karla = Karla({ subsets: ["latin"], weights: [400, 700] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className={karla.className} lang="en">
      <body>{children}</body>
    </html>
  );
}
