import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/PageHeader";
import { getAdminContactsResult, getAdminLeads } from "@/lib/admin-crm-view";
import { LeadsTable } from "../leads/LeadsTable";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ContactosPageProps {
  searchParams: { filter?: string };
}

export default async function AdminContactosPage({ searchParams }: ContactosPageProps) {
  const filter = searchParams?.filter || "all";

  const [leads, contactsResult] = await Promise.all([
    getAdminLeads(),
    getAdminContactsResult(),
  ]);
  const contacts = contactsResult.contacts;
  const demoModeActive = process.env.NEXT_PUBLIC_DEMO_MODE === "true";
  const hasRealStoreLeads = leads.some((lead) => lead.itemsSummary);
  
  // Stats calculations matching leads page
  const displayLeadsCount = demoModeActive && !hasRealStoreLeads ? 3 : leads.length;
  const newLeadsCount =
    demoModeActive && !hasRealStoreLeads
      ? 1
      : leads.filter((lead) => lead.estado === "Nuevo").length;
  const storeLeadsCount =
    demoModeActive && !hasRealStoreLeads
      ? 3
      : leads.filter((lead) => lead.itemsSummary).length;

  let title = "Directorio de Contactos CRM";
  let subtitle = "Gestión de clientas, historial de contactos y estado de importación.";

  if (filter === "lanzamiento_500") {
    title = "Lanzamiento 500";
    subtitle = "Filtro activo: Contactos importados para campaña Lanzamiento 500.";
  } else if (filter === "seguimiento") {
    title = "Seguimiento WhatsApp";
    subtitle = "Filtro activo: Contactos que requieren seguimiento vía WhatsApp.";
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={title}
        subtitle={subtitle}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        <Card className="border-crm-line bg-crm-surface">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-crm-muted">Total Pedidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-crm-text">{displayLeadsCount}</div>
            <p className="mt-1 text-xs text-crm-faint">Registrados en Google Sheets</p>
          </CardContent>
        </Card>

        <Card className="border-crm-line bg-crm-surface">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-crm-muted">Nuevos Pedidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-crm-gold">{newLeadsCount}</div>
            <p className="mt-1 text-xs text-crm-faint">Pendientes de confirmacion</p>
          </CardContent>
        </Card>

        <Card className="border-crm-line bg-crm-surface">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-crm-muted">Origen Tienda Online</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#c5a059]">{storeLeadsCount}</div>
            <p className="mt-1 text-xs text-[#8c7345]">Canal de comercio digital</p>
          </CardContent>
        </Card>

        <Card className="border-crm-line bg-crm-surface">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-crm-muted">Contactos CRM</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-crm-cyan">{contacts.length}</div>
            <p className="mt-1 text-xs text-[#227280]">Directorio privado</p>
          </CardContent>
        </Card>
      </div>

      <LeadsTable
        initialLeads={leads}
        initialContacts={contacts}
        dataSource={contactsResult.source}
        demoModeActive={demoModeActive}
        defaultTab="contactos"
        defaultFilter={filter}
      />
    </div>
  );
}
