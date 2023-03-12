import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/api", (req, res) => {
  res.send("Hello, I am the home page");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
