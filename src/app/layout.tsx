import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";
import { UTMTracker } from "@/components/layout/UTMTracker";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexa Store | Luma Commerce OS",
  description:
    "Nexa Store - Tienda premium demo para presentar productos, recibir pedidos y organizar oportunidades comerciales.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>
        <CartProvider>
          <UTMTracker />
          <AppShell>{children}</AppShell>
        </CartProvider>
      </body>
    </html>
  );
}
