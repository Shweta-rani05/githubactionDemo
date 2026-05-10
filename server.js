import express from "express";
import sum from "./sum.js";


const app = express();
const PORT = 2020;


app.get("/home", (req, res) => {
    res.json({
        msg: "I am Root !!"
    });
});

app.get("/getSum/:a/:b", async (req, res) => {
    const { a, b } = req.params;

    res.json({
        ans: sum(parseInt(a), parseInt(b))
    });
});

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});