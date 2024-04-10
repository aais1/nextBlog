import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/containers/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "Blog App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
      <Navbar/>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
