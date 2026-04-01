import express from "express";
import { pool } from "./db";

const app = express();
app.use(express.json());

app.get("/api/students", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM students");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

const PORT = 3000;
app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server running on port ${PORT}`);
});