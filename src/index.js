const express = require("express");
const app = express();

const PORT = process.env.PORT || 5173;

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(PORT, () => console.log(`Server ready on port http://localhost:${PORT}.`));

module.exports = app;