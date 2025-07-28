import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";

import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";

// ✅ Step 1: Initialize Express app
const app = express();

// ✅ Step 2: Create HTTP server and Socket.IO server
const server = createServer(app);
const io = connectToSocket(server);

// ✅ Step 3: App-level configurations
app.set("port", process.env.PORT || 8000);

// ✅ Step 4: Middleware setup
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

// ✅ Step 5: Test Route (optional but useful)
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

// ✅ Step 6: Mount API routes
app.use("/api/v1/users", userRoutes);

// ✅ Step 7: DB Connection + Start server
const start = async () => {
  try {
    const connectionDb = await mongoose.connect(
      "mongodb+srv://imdigitalashish:imdigitalashish@cluster0.cujabk4.mongodb.net/"
    );

    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`);

    server.listen(app.get("port"), () => {
      console.log("LISTENIN ON PORT", app.get("port"));
    });
  } catch (err) {
    console.error("DB connection error:", err);
  }
};

start();
