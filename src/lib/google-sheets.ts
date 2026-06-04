import "server-only";
import { sheets_v4 } from "googleapis";

export async function getSheetsClient(): Promise<{
  sheets: sheets_v4.Sheets | null;
  spreadsheetId: string | null;
}> {
  return { sheets: null, spreadsheetId: null };
}
