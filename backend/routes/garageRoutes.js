import express from "express";
import {getGaragesinLocation,createGarage,getGaragesinBounds,getGarageById, updateGarage} from "../controllers/garageController.js";

const router=express.Router();


router.post("/",createGarage);
router.put("/:id",updateGarage); 
router.get("/in-bounds",getGaragesinBounds);
router.get("/nearbygarages",getGaragesinLocation);
router.get("/:id",getGarageById);

export default router;