import express from "express";
import routes from "./routes";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

export default app;
