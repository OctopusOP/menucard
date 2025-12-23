// pages/api/wingo.js
export default async function handler(req, res) {
  // your original code, adapted to run inside an API handler with minimal changes
  const target =
    "https://draw.ar-lottery01.com/WinGo/WinGo_1M/GetHistoryIssuePage.json";

  // fetch upstream
  const upstreamRes = await fetch(target);
  let data = null;
  try {
    data = await upstreamRes.json();
    // keep your console logs
    console.log(data.data.list[0].issueNumber);
    console.log(data.data.list[0].number);
  } catch (e) {
    // swallow JSON parse error for now (exactly as you had it)
    console.log("Failed to parse upstream JSON:", e?.message ?? e);
  }

  // If we got parsed JSON, forward it. Otherwise return upstream text (if any) or an error.
  if (data) {
    // forward the JSON exactly
    res.status(200).json(data);
  } else {
    // try to return the raw text body if available
    try {
      const raw = await upstreamRes.text();
      if (raw) {
        // attempt to send raw upstream body as text
        res.setHeader(
          "Content-Type",
          upstreamRes.headers.get("content-type") || "text/plain"
        );
        res.status(upstreamRes.status || 502).send(raw);
        return;
      }
    } catch (_) {
      // ignore
    }

    // fallback error response
    res.status(502).json({ error: "Upstream returned no JSON and no text" });
  }
}
