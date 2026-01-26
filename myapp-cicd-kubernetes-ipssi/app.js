const express = require("express");
const app = express();

const VERSION = "v2";

app.get("/", (req, res) => {
  res.json({
    app: "My App - IPSSI",
    version: `${VERSION} ✅✅`,
    status: "active",
    timestamp: new Date().toISOString(),
    html: `
    <h1>My App - IPSSI</h1>
    <p>Version: ${VERSION} ✅✅</p>
    <p>Hello from Argo CD 🚀</p>
  `
  });
});

const PORT = 8081;
app.listen(PORT, '0.0.0.0');