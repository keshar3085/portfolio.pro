import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return new Response("Missing username", { status: 400 });
  }

  try {
    // Fetch using the primary GitHub green color hex (39d353)
    const res = await fetch(`https://ghchart.rshah.org/39d353/${username}`, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return new Response("Failed to fetch contribution chart", { status: 502 });
    }

    let svg = await res.text();

    // 1. Expand the width and viewBox so the text on the right doesn't clip
    svg = svg.replace('width="776"', 'width="795"');
    svg = svg.replace('viewBox="0 0 776 112"', 'viewBox="0 0 795 112"');

    // 2. Map colors from ghchart light-theme output to GitHub dark-theme colors
    svg = svg.replace(/fill="#ebedf0"/g, 'fill="#161b22"');
    svg = svg.replace(/fill="#bebebe"/g, 'fill="#0e4429"');
    svg = svg.replace(/fill="#7be78e"/g, 'fill="#26a641"');

    // 3. Inject CSS style tag to round rects and style labels
    const styleBlock = `
  <style>
    rect.day {
      rx: 2px !important;
      ry: 2px !important;
    }
    text.month, text.wday {
      fill: #8b949e !important;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif !important;
      font-size: 9px !important;
    }
  </style>
`;

    // 4. Dynamically append the current month label ("Jul") inside the coordinate group
    const currentMonth = new Date().toLocaleString("en-US", { month: "short" });
    if (!svg.includes('x="760" y="-8" class="month"')) {
      svg = svg.replace(
        '<g transform="translate(10, 20)">',
        `<g transform="translate(10, 20)">\n    <text x="760" y="-8" class="month">${currentMonth}</text>`
      );
    }

    const insertIndex = svg.indexOf("</svg>");
    if (insertIndex !== -1) {
      svg = svg.slice(0, insertIndex) + styleBlock + svg.slice(insertIndex);
    }

    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });
  } catch {
    return new Response("Unexpected error", { status: 500 });
  }
}
