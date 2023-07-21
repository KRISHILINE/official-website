import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const PORT: number = 8000;

app.use(cors());

app.get("/api", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
