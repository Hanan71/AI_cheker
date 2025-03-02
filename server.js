const express = require("express");
const ping = require("ping");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/ping", async (req, res) => {
    let host = "8.8.8.8"; // google server 
    let result = await ping.promise.probe(host);
    res.json({ latency: result.time });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`  server is working http://localhost:${PORT}`));
