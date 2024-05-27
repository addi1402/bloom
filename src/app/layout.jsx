import Header from "@/components/Header/Header";
import "./globals.css";
import Wrapper from "./wrapper";
import Footer from "@/components/Footer/Footer";
import { GeistSans } from "geist/font/sans";
import { Test } from "./test";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Wrapper>
          <Test />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
