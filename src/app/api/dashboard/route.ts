import { NextResponse } from "next/server";
import { getNexaData } from "@/lib/crm-data/get-nexa-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getNexaData();
    return NextResponse.json(data, {
      headers: { "Cache-Control": "s-maxage=60, stale-while-revalidate=300" },
    });
  } catch (error) {
    console.error("Dashboard API error:", error);
    return NextResponse.json(
      { error: "Error interno al obtener datos" },
      { status: 500 }
    );
  }
}
