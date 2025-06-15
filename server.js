require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK;

app.get("/", (req, res) => {
  fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: "📦 Quelqu’un a scanné le QR code ! Le colis est arrivé ✅"
    })
  });
  res.send("<h1>Colis confirmé !</h1>");
});

app.listen(PORT, () => {
  console.log(`✅ Serveur en ligne sur le port ${PORT}`);
});
