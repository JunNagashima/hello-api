import express, { type Request, type Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/test", (req: Request, res: Response) => {
  res.send("Hello Test!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
