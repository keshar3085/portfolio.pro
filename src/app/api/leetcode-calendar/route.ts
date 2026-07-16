import { NextResponse } from "next/server";

type LeetCodeCalendarResponse = {
  data?: {
    matchedUser?: {
      submissionCalendar?: string;
    };
  };
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Missing username" }, { status: 400 });
  }

  const query = `
    query calendar($username: String!) {
      matchedUser(username: $username) {
        submissionCalendar
      }
    }
  `;

  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com/",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch LeetCode calendar" }, { status: 502 });
    }

    const json = (await res.json()) as LeetCodeCalendarResponse;
    const calendarString = json.data?.matchedUser?.submissionCalendar;

    if (!calendarString) {
      return NextResponse.json({ calendar: {} });
    }

    const calendar = JSON.parse(calendarString) as Record<string, number>;

    return NextResponse.json({ calendar });
  } catch {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
