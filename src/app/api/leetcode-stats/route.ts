import { NextResponse } from "next/server";

type LeetCodeAcItem = {
  difficulty: string;
  count: number;
  submissions: number;
};

type LeetCodeResponse = {
  data?: {
    matchedUser?: {
      submitStats?: {
        acSubmissionNum?: LeetCodeAcItem[];
      };
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
    query userStats($username: String!) {
      matchedUser(username: $username) {
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
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
      return NextResponse.json({ error: "Failed to fetch LeetCode stats" }, { status: 502 });
    }

    const json = (await res.json()) as LeetCodeResponse;
    const stats = json.data?.matchedUser?.submitStats?.acSubmissionNum ?? [];

    const all = stats.find((item) => item.difficulty === "All");
    const easy = stats.find((item) => item.difficulty === "Easy");
    const medium = stats.find((item) => item.difficulty === "Medium");
    const hard = stats.find((item) => item.difficulty === "Hard");

    const acceptanceRate =
      all && all.submissions > 0 ? Number(((all.count / all.submissions) * 100).toFixed(2)) : null;

    return NextResponse.json({
      username,
      totalSolved: all?.count ?? 0,
      easySolved: easy?.count ?? 0,
      mediumSolved: medium?.count ?? 0,
      hardSolved: hard?.count ?? 0,
      acceptanceRate,
    });
  } catch {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
