const express = require("express");
const genPrivateServer = require("./hah");
const app = express();
const PORT = 3000;

app.get("/", async (req,res) => {
    res.json("invalid endpoints")
})

app.get("/getps", async (req,res) => {
    const gen = genPrivateServer();
    res.json({"url" : gen, "credit" : "myuko"})
})

app.listen(PORT, () => {
    console.log("ready is https://localhost:3000")
})
