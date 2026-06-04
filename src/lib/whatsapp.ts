
export interface CartItemShort {
  name: string;
  quantity: number;
  price: number;
  sku: string;
}

export interface CartTotalsShort {
  subtotal: number;
  tax: number;
  delivery: number;
  total: number;
}

export interface LeadShort {
  nombre: string;
  apellido?: string;
  whatsapp: string;
  itemsSummary: string;
  total: number;
  deliveryMethod?: string;
}

// Clean phone number for WhatsApp
export function cleanPhoneNumber(phone: string): string {
  let cleaned = phone.replace(/[^0-9]/g, "");
  // If Dominican Republic number without country code, add 1
  if (cleaned.length === 10 && (cleaned.startsWith("809") || cleaned.startsWith("829") || cleaned.startsWith("849"))) {
    cleaned = "1" + cleaned;
  }
  return cleaned;
}

// Get WhatsApp base link (routed internally for simulated demo mode)
export function getWhatsappBaseUrl(): string {
  return "/whatsapp-demo";
}

export function buildProductWhatsappMessage(product: { name: string; sku: string }): string {
  const message = `Hola, vengo de la tienda Nexa Store. Quiero información sobre ${product.name} (SKU: ${product.sku}).`;
  return `${getWhatsappBaseUrl()}?text=${encodeURIComponent(message)}`;
}

export function buildCartWhatsappMessage(items: CartItemShort[], totals: CartTotalsShort): string {
  let message = `Hola, quiero confirmar este pedido en Nexa Store:\n\n`;
  
  items.forEach((item) => {
    message += `• ${item.name} x${item.quantity} (SKU: ${item.sku}) - RD$ ${(item.price * item.quantity).toLocaleString()}\n`;
  });
  
  message += `\nSubtotal: RD$ ${totals.subtotal.toLocaleString()}`;
  if (totals.tax > 0) {
    message += `\nImpuestos (18%): RD$ ${totals.tax.toLocaleString()}`;
  }
  message += `\nDelivery: ${totals.delivery === 0 ? "Gratis" : `RD$ ${totals.delivery.toLocaleString()}`}`;
  message += `\n*Total Estimado: RD$ ${totals.total.toLocaleString()}*\n\n`;
  
  message += `Por favor, me confirman disponibilidad y método de entrega para coordinar.`;

  return `${getWhatsappBaseUrl()}?text=${encodeURIComponent(message)}`;
}

export function buildGeneralAdvisorMessage(): string {
  const message = `Hola, me interesa comprar productos premium en Nexa Store. Vi la tienda y quiero orientación.`;
  return `${getWhatsappBaseUrl()}?text=${encodeURIComponent(message)}`;
}

export function buildLeadFollowUpMessage(lead: LeadShort): string {
  const phone = cleanPhoneNumber(lead.whatsapp);
  const fullName = `${lead.nombre} ${lead.apellido || ""}`.trim();
  const deliveryText = lead.deliveryMethod === "retiro" 
    ? "Retiro Coordinado" 
    : "Delivery Coordinado";
  
  const message = `Hola ${fullName}, te escribimos de Nexa Store en relación a tu pedido registrado de:\n${lead.itemsSummary}.\n\n*Total:* RD$ ${lead.total.toLocaleString()}\n*Método de entrega:* ${deliveryText}\n\nQueremos confirmar la disponibilidad, coordinar la entrega y definir tu método de pago preferido. ¿Cómo estás?`;
  return `${getWhatsappBaseUrl()}?phone=${phone}&text=${encodeURIComponent(message)}`;
}
