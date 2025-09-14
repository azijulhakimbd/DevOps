import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GridBeams } from "@/components/magicui/grid-beams";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevOps Team",
  description: "Develop by DevOps Team Member",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GridBeams  gridSize={0}
        gridColor="rgba(255, 255, 255, 0.2)"
        rayCount={20}
        rayOpacity={0.55}
        raySpeed={1.5}
        rayLength="40vh"
        gridFadeStart={5}
        gridFadeEnd={90}
        className="h-full w-full">
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </GridBeams>
        
      </body>
    </html>
  );
}
