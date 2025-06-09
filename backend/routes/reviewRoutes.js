import express from "express";
import {addReview,getReviewsByGarage,getReviewsForService} from "../controllers/reviewController.js";


const router = express.Router();


router.post('/', addReview);


router.get('/garage/:garageId', getReviewsByGarage);
router.get('/garage/:garageId/service/:serviceId',getReviewsForService)

export default router;