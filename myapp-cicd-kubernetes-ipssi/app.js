const express = require("express");
const app = express();

const VERSION = "v0";

app.get("/", (req, res) => {
  res.send(`
    <h1>My App - IPSSI</h1>
    <p>Version: ${VERSION}</p>
    <p>Hello from Argo CD 🚀</p>
  `);
});

const PORT = 8081;
app.listen(PORT);