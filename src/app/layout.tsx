import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "@/providers/redux-provider";
import { Toaster } from "sonner";

import "./globals.css";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";
import ContactWrapper from "@/components/global/contact/contact-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Registros civiles | Realiza tus tramites lagales con nosotros",
  description: "Realiza tramites legales y expendio de certificados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ReduxProvider>
          <div id="modal"></div>
          <main className="w-full">{children}</main>
        </ReduxProvider>
        <Toaster />
        <ContactWrapper />
        <Footer />
      </body>
    </html>
  );
}
