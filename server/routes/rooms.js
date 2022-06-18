import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
/*------CREATE Rooms----------*/
router.post("/:hotelid", verifyAdmin, createRoom);

/*------GET   Rooms----------*/
router.get("/", getRooms);

/*------GET A  Rooms----------*/
router.get("/:id", getRoom);

/*------UPDATE  Rooms----------*/
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);

/*------DELETE  Rooms----------*/
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

export default router;
