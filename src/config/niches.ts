export interface NicheConfig {
  id: string;
  name: string;
  nicheName: string;
  claimHero: string;
  subtitleHero: string;
  categories: string[];
  theme: {
    primary: string; // Tailwind color class or hex
    primaryHover: string;
    background: string;
    text: string;
    cardBg: string;
    border: string;
    gradientFrom: string;
    gradientTo: string;
    badgeBg: string;
    badgeText: string;
  };
  whatsappNumber: string;
  instagramUrl: string;
  facebookUrl: string;
  tiktokUrl: string;
  ctaText: string;
  benefits: { title: string; description: string; icon: string }[];
  copyComercial: {
    aboutTitle: string;
    aboutText: string;
    ctaSectionTitle: string;
    ctaSectionText: string;
  };
  crmConfig: {
    origen: string;
    sheetName: string;
    localFallbackFile: string;
  };
}

export const NICHES: Record<string, NicheConfig> = {
  boutique: {
    id: "boutique",
    name: "Luma Commerce OS — Demo Oficial",
    nicheName: "Nexa Store",
    claimHero: "Tienda premium demo para presentar productos, recibir pedidos y organizar oportunidades comerciales.",
    subtitleHero: "Demo oficial de Luma Premium con catálogo, carrito, checkout simulado y panel operativo para tiendas y marcas de productos.",
    categories: ["Fragancias", "Cuidado personal", "Accesorios", "Hogar premium", "Regalos", "Kits"],
    theme: {
      primary: "bg-[#c5a059]", // Gold
      primaryHover: "hover:bg-[#b38f48]",
      background: "bg-[#faf8f5]", // Bone Cream
      text: "text-[#1e2d1a]", // Dark Olive Green
      cardBg: "bg-white",
      border: "border-[#f2eee9]",
      gradientFrom: "from-[#faf8f5]",
      gradientTo: "to-[#f2eee9]",
      badgeBg: "bg-[#2a3b26]",
      badgeText: "text-[#faf8f5]",
    },
    whatsappNumber: "+18090000000",
    instagramUrl: "https://instagram.com/nexastore.demo",
    facebookUrl: "https://facebook.com/nexastore.demo",
    tiktokUrl: "https://tiktok.com/@nexastore.demo",
    ctaText: "Pedir por WhatsApp (Demo)",
    benefits: [
      {
        title: "Catálogo Premium",
        description: "Presenta tu inventario con estética premium e interactividad de alta velocidad.",
        icon: "ShoppingBag",
      },
      {
        title: "Checkout Simulado",
        description: "Tus clientes completan su orden en segundos y el pedido se registra de inmediato.",
        icon: "ShieldCheck",
      },
      {
        title: "CRM Comercial Básico",
        description: "Recibe prospectos y dale seguimiento comercial desde un panel integrado.",
        icon: "Sparkles",
      },
    ],
    copyComercial: {
      aboutTitle: "Infraestructura Comercial Premium",
      aboutText: "Nexa Store es una demo oficial de Luma Premium. Esta tienda muestra cómo un negocio de venta de productos puede digitalizar su operación, presentar un catálogo premium y capturar pedidos sin fricciones.",
      ctaSectionTitle: "Prueba la experiencia de compra",
      ctaSectionText: "Agrega productos a tu carrito, realiza un checkout simulado y revisa el flujo comercial completo.",
    },
    crmConfig: {
      origen: "tienda_demo",
      sheetName: "Pedidos",
      localFallbackFile: "Pedidos.csv",
    },
  }
};

// Obtenemos la configuración del nicho activo. Se lee de variables de entorno o usa "boutique" por defecto.
export function getActiveNiche(): NicheConfig {
  const activeId = process.env.NEXT_PUBLIC_ACTIVE_NICHE || "boutique";
  return NICHES[activeId] || NICHES.boutique;
}
