import express from "express";
import {
  updateHotel,
  createHotel,
  getHotels,
  getHotel,
  deleteHotel,
} from "../controllers/hotels.js";

const router = express.Router();

/*--------CREATE Hotel----------*/
router.post("/", createHotel);

/*------UPDATE Hotel----------*/
router.put("/:id", updateHotel);

/*------GET All Hotels----------*/
router.get("/", getHotels);

/*------GET Hotel----------*/
router.get("/:id", getHotel);

/*------DELETE Hotel----------*/
router.delete("/:id", deleteHotel);

export default router;
