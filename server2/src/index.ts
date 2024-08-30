import express from "express";
const app = express();
import { AppDataSource } from "./database/db";
import cors from "cors";
import { Socket_server } from "./socket/server.socket";

require("dotenv").config();

async function initialize() {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
  } catch (error) {
    console.error("Error during Data Source initialization:", error);
  }
}

initialize();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

const server = app.listen(3002, () => {
  console.log("Server Running");
});

export const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

Socket_server();
