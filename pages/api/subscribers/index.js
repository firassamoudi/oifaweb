import Http from "../../../lib/http";

async function handler(req, res) {
  try {
    const { email } = req.body;
    await Http.post("/subscriber", { email });
    // ...
    return res.json({ success: true });
  } catch (err) {
    return res.json({ success: false });
  }
}

export default handler;
