"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Menu } from "lucide-react";
import { brand } from "@/lib/brand";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filter = searchParams ? searchParams.get("filter") : null;

  let title = "Panel";
  if (pathname === "/admin") {
    title = "Ventas y CxC";
  } else if (pathname === "/admin/dashboard") {
    title = "Panel Principal";
  } else if (pathname === "/admin/leads") {
    title = "Pedidos / Leads";
  } else if (pathname === "/admin/contactos") {
    if (filter === "lanzamiento_500") {
      title = "Lanzamiento 500";
    } else if (filter === "seguimiento") {
      title = "Seguimiento WhatsApp";
    } else {
      title = "Contactos";
    }
  } else if (pathname?.startsWith("/admin/")) {
    title = "Detalle de venta";
  }

  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b border-crm-line bg-crm-bg px-4 sm:px-6 lg:px-8">
      <button
        type="button"
        aria-label="Abrir menu"
        onClick={onMenuClick}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-crm-line bg-crm-surface text-crm-muted transition-colors hover:bg-crm-surface2 hover:text-crm-text lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="text-xs font-medium text-crm-faint">
          {brand.productName}
        </span>
        <h2 className="truncate text-lg font-semibold leading-7 text-crm-text sm:text-xl">
          {title}
        </h2>
      </div>
    </header>
  );
}
