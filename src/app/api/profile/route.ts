import { NextResponse } from "next/server";
import { profile, SITE_URL } from "@/data/profile";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({ site: SITE_URL, generatedFrom: "src/data/profile.ts", ...profile });
}
