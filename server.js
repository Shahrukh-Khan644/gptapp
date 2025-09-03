const express = require("express");
const app = express();
const PORT = 7001;

app.get("/", (req, res) => {
  res.send("🚀 Hello from Dockerized Express app!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
