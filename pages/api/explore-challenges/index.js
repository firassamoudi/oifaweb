import Http from "../../../lib/http";

async function handler(req, res) {
  try {
    const chls = await Http.get("/challenges");
    const data = chls.data || {};
    const challenges = data.challenges || [];
    // ...
    return res.json({ challenges });
  } catch (err) {
    return res.json({ success: false });
  }
}

export default handler;
