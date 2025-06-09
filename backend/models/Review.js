import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  garage: { type: mongoose.Schema.Types.ObjectId, ref: 'Garage', required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // only for customer reviews
  source: { type: String, enum: ['customer', 'team'], required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: String,
  reviewedBy: String, // Optional: 'AutoCare Admin', etc.
  createdAt: { type: Date, default: Date.now }
});
reviewSchema.index({ garage: 1, service: 1, createdAt: -1 });
export default mongoose.model('Review', reviewSchema);