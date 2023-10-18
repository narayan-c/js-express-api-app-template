import express, { Express, Request, Response } from 'express';

const app: Express = express();
const cors = require('cors');

const port = 3000;
const mainRouter = require("./routes/mainRouter");

app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.get("/", (req, res) => {
    res.json({ message: "ok" });
});
app.use("/api", mainRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
