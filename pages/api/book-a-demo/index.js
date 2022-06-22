import Http from "../../../lib/http";

async function handler(req, res) {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      jobTitle,
      company,
      size,
      country,
      comment,
    } = req.body;

    await Http.post("/book-a-demo", {
      firstName,
      lastName,
      email,
      phoneNumber,
      jobTitle,
      company,
      size,
      country,
      comment,
    });
    // ...
    return res.json({ success: true });
  } catch (err) {
    return res.json({ success: false });
  }
}

export default handler;
