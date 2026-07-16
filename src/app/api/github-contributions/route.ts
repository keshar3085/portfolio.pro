import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Missing username" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://github.com/${username}`, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch GitHub profile" }, { status: 502 });
    }

    const html = await res.text();

    const regex = /([\d,]+)\s+contributions\s+in\s+the\s+last\s+year/i;
    const match = html.match(regex);

    const totalContributions = match?.[1] ?? null;

    return NextResponse.json({
      username,
      totalContributions,
    });
  } catch {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
