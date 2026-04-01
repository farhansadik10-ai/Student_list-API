import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "student_db",
  password:   ""       ,
  port: 5432
});

// Test connection
(async () => {
  try {
    const client = await pool.connect();
    console.log("Connected successfully");
    client.release(); 
  } catch (err: any) {
    console.error("Connection failed:", err.message);
  }
})();