import Hotel from '../models/Hotel.js'
//import { createError } from "../utils/errorFile.js";
import Room from "../models/Room.js";


/*--------CREATE Hotel----------*/
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const createHotel = await newHotel.save();
    res.status(200).json(createHotel);
  } catch (err) {
    next(err);
  }
};

/*------UPDATE Hotel----------*/
export const updateHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (err) {
    next(err);
  }
};

/*------GET All Hotels----------*/
export const getHotels = async (req, res, next) => {
  /*const failedReq =  true;
      if(failedReq) return next (createError(404, 'Damn, Page not Found😭'))
      */
  try {
    const getHotels = await Hotel.find();
    res.status(200).json(getHotels);
  } catch (err) {
    next(err);
  }
};

/*------GET Hotel----------*/
export const getHotel = async (req, res, next) => {
  try {
    const getHotel = await Hotel.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (err) {
    next(err);
  }
};

/*------DELETE Hotel----------*/
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel Deleted");
  } catch (err) {
    next(err);
  }
};
