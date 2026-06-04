import { getNexaData } from "@/lib/crm-data/get-nexa-data";
import { AdminClient } from "./AdminClient";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const data = await getNexaData();
  return <AdminClient data={data} />;
}
