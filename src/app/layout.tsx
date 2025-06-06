import type { Metadata } from "next";
import { Rubik } from "next/font/google"; // ✅ Import Rubik font
import "./globals.css";
import { ReduxProviders } from "@/components/shared/ReduxProviders";
import ToasterProvider from "@/components/shared/ToasterProvider";
import ClientDebugger from "@/components/ClientDebugger";
import DebugComponent from "@/components/DebugComponent";
import Footer from "@/components/shared/Footer";

// ✅ Configure the Rubik font
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rubik", // Optional if using with Tailwind
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fresh Harvests",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rubik.className} suppressHydrationWarning>
      <body data-app="online-shop">
        <DebugComponent name="RootLayout" />
        <div id="app-root">
          <ReduxProviders>
            {/* <Navbar /> */}
            {children}
            <ToasterProvider />
            <ClientDebugger />
            <Footer />
          </ReduxProviders>
        </div>
      </body>
    </html>
  );
}
