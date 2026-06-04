# Luma Commerce OS — Demo Oficial

Esta es una demo comercial de Luma Premium con datos ficticios. No representa un cliente real ni procesa pedidos reales.

La marca visible de esta demostración es **Nexa Store**.

## Propósito Comercial

Este producto demuestra la capacidad de `Luma Commerce OS` para implementar una tienda premium de comercio electrónico totalmente integrada con un panel de control operativo (CRM local) para gestionar pedidos, contactos, clientes recurrentes y seguimiento de pagos.

## Páginas Activas en la Demo

- `/` - Tienda pública (Catálogo de productos premium, carrito y detalles).
- `/checkout` - Registro de pedido demo.
- `/gracias` - Confirmación post-checkout simulado.
- `/whatsapp-demo` - Simulación de la redirección e integración de WhatsApp.
- `/admin` - Dashboard unificado del CRM operativo.
- `/admin/dashboard` - Métricas operativas, KPI de ventas e inventario.
- `/admin/leads` - Gestión de pedidos y abonos de planes de pago.
- `/admin/contactos` - Directorio de contactos y planillas de seguimiento.

## Especificaciones Técnicas

- **Framework:** Next.js (App Router) con TypeScript
- **Estilos:** Tailwind CSS y Lucide React para iconografía.
- **Base de Datos:** Almacenamiento local mockeado en archivos CSV en `data/nexa_store` (bypassea llamadas a Google Sheets API remota).
