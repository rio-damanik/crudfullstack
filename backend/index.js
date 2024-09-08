import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(3300, () => console.log("Server up and running..."));

export default (req, res) => {
  res.status(200).json({ message: "Hello from Vercel API" });
};
