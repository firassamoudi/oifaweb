import Http from "../../../lib/http";

async function handler(req, res) {
  try {
    const {
      firstName,
      lastName,
      email,
      company,
      phoneNumber,
      comment,
    } = req.body;
    await Http.post("/contact-us", {
      firstName,
      lastName,
      email,
      company,
      phoneNumber,
      comment,
    });

    // ...
    return res.json({ success: true });
  } catch (err) {
    return res.json({ success: false });
  }
}

export default handler;
