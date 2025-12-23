const WingoPage = async () => {
  const res = await fetch(
    "https://draw.ar-lottery01.com/WinGo/WinGo_1M/GetHistoryIssuePage.json"
  );
  let data = null;
  try {
    data = await res.json();
    console.log(data.data.list[0].issueNumber);
    console.log(data.data.list[0].number);
  } catch (e) {
    console.log("Failed to parse JSON:", e?.message ?? e);
  }

  return (
    <>
      <h1>Wingo Page</h1>
    </>
  );
};
export default WingoPage;
