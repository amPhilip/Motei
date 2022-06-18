import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/*------UPDATE User----------*/
router.put("/:id", verifyUser, updateUser);

/*------GET  Users----------*/
router.get("/", verifyAdmin, getUsers);

/*------GET A User----------*/
router.get("/:id", verifyUser, getUser);

/*------DELETE User----------*/
router.delete("/:id", verifyUser, deleteUser);

export default router;
