import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import garageRoutes from "./routes/garageRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/garages", garageRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/services", serviceRoutes);

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("OGExpress Service is running at " + PORT);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
export default app;


