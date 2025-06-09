import express from "express";
import {getOrderbyCustomer,getOrderbyGarage,createOrder} from "../controllers/orderController.js";

const router = express.Router();


router.post("/",createOrder);
router.get("/:customerId",getOrderbyCustomer);
router.get("/:garageId",getOrderbyGarage);
export default router;
