require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const app = express();

const PORT = process.env.PORT || 3000;
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK;

app.get("/", (req, res) => {
  const now = new Date();
  const date = now.toLocaleDateString('fr-FR');
  const time = now.toLocaleTimeString('fr-FR');

  fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
       content: `📦 **Colis scanné !**
📍 **Date :** ${date}
🕒 **Heure :** ${time}
🔗 _QR code scanné devant chez toi_`
    })
  })
  .then(() => console.log('Webhook Discord envoyé'))
  .catch(err => console.error('Erreur webhook Discord:', err));

  res.send("<h1>Notification envoyée à Mathieu Languenakers, Merci pour la livraison</h1>");
});

app.listen(PORT, () => {
  console.log(`✅ Serveur en ligne sur le port ${PORT}`);
});
