import express from "express";
import cors from "cors";
import dns from "dns";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
dotenv.config();

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is the mother india server");
});

const PORT = process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
});
