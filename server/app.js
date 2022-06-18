import express, { json } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
dotenv.config();

//DB
connectDB();

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

//Routes Middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

//
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || `😢Something Went Wrong`;
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

/*-------------App Listening---------------*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server active at PORT ${PORT}`);
});
