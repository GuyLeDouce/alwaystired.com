import { NextResponse } from "next/server";
import { getDonationBalance } from "@/lib/donation";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await getDonationBalance();
  return NextResponse.json(data, {
    headers: {
      "cache-control": "s-maxage=60, stale-while-revalidate=300",
    },
  });
}
