import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms'

const app = express();
dotenv.config();

//DB
connectDB();

//middlewares
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);





/*-------------App Listening---------------*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server active at PORT ${PORT}`);
});
