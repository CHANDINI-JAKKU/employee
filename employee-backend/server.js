import exp from "express";
import { connect } from "mongoose";
import { empRoute } from "./API/empApp.js";
import cors from "cors";
import "dotenv/config";
import dns from "dns";

// Force Google DNS for Atlas SRV records
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = exp();
//add cors middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "https://employee-eosin-two.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
//body parser middleware
app.use(exp.json());
//emp api middleware
app.use("/emp-api", empRoute);

//DB connection
const connectDB = async () => {
  try {
    const dbUrl = process.env.DB_URL;
    if (!dbUrl) {
      throw new Error("DB_URL is not defined in environment variables");
    }
    console.log("Connecting to DB...");
    await connect(dbUrl, {
      family: 4, // Force IPv4 to avoid some DNS issues
    });
    console.log("DB connected successfully");
    const port = process.env.PORT || 4000;
    // Only listen if not running as a Vercel Serverless Function
    if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
      app.listen(port, () => console.log(`server listening on port ${port}..`));
    }
  } catch (err) {
    console.log("err in DB connection", err.message);
  }
};

connectDB();

//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});

export default app;
