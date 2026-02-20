import { NextResponse } from "next/server";

const KEV_URL =
  "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

export async function GET() {
  try {
    const res = await fetch(KEV_URL, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("KEV fetch failed");
    const data = await res.json();
    const vulnerabilities = data.vulnerabilities || [];
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recent = vulnerabilities.filter(
      (v: { dateAdded: string }) => new Date(v.dateAdded) >= sevenDaysAgo
    );
    return NextResponse.json({
      title: data.title,
      dateReleased: data.dateReleased,
      count: recent.length,
      vulnerabilities: recent,
    });
  } catch (e) {
    console.error("KEV recent error:", e);
    return NextResponse.json(
      { error: "KEV verisi alınamadı." },
      { status: 502 }
    );
  }
}
