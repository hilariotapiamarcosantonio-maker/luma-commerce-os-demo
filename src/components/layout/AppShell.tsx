"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { BottomNav } from "@/components/layout/BottomNav";
import { FloatingWhatsApp } from "@/components/store/FloatingWhatsApp";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  const isCrmRoute =
    pathname === "/admin/dashboard" ||
    pathname === "/admin" ||
    pathname.startsWith("/admin/");

  // Dynamically manage the 'dark' class on <html> based on whether it is a CRM route
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isCrmRoute) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [isCrmRoute]);

  // If it's a storefront route, render without CRM Sidebar, Header, or BottomNav
  if (!isCrmRoute) {
    return (
      <div className="min-h-screen bg-[#FAFAF9] text-[#1C1917] selection:bg-[#F5F2EB] selection:text-[#8C6D30] antialiased">
        {children}
        <FloatingWhatsApp />
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-crm-bg text-crm-text">
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Header onMenuClick={() => setMobileSidebarOpen(true)} />
        <div className="bg-crm-gold/15 border-b border-crm-gold/30 text-crm-gold text-xs px-4 py-2 text-center font-bold tracking-wide flex items-center justify-center gap-2 shrink-0 select-none">
          <span>🔒</span>
          <span>Panel de Control Demo - Simulación Comercial con Datos Ficticios</span>
        </div>
        <main className="flex-1 overflow-y-auto bg-crm-bg p-4 pb-28 sm:pb-32 lg:pb-6">
          {children}
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
