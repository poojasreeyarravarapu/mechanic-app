import Review from '../models/Review.js';
import Garage from '../models/Garage.js';


export const addReview = async (req, res) => {
  const { garage,service, customer, source, rating, comment, reviewedBy } = req.body;

  if (!garage || !source || !rating) {
    return res.status(400).json({ message: 'Garage, source, and rating are required' });
  }

  try {
    const review = new Review({
      garage,
      service,
      customer: source === 'customer' ? customer : undefined,
      source,
      rating,
      comment,
      reviewedBy: source === 'team' ? reviewedBy : undefined
    });

    await review.save();


    const reviews = await Review.find({ garage, source });
    const total = reviews.length;
    const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / total;

    const updateField = source === 'customer'
      ? {
          'ratingsSummary.customer.average': avg,
          'ratingsSummary.customer.totalReviews': total
        }
      : {
          'ratingsSummary.teamReview.average': avg,
          'ratingsSummary.teamReview.totalReviews': total
        };

    await Garage.findByIdAndUpdate(garage, { $set: updateField });

    res.status(201).json({ message: '✅ Review added', review });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getReviewsByGarage = async (req, res) => {
  try {
    const reviews = await Review.find({ garage: req.params.garageId })
      .populate('customer', 'name email') // optional
      .sort({ createdAt: -1 });

    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getReviewsForService = async (req, res) => {
  const { garageId, serviceId } = req.params;
  if (!garageId || !serviceId) {
    return res.status(400).json({ message: 'Garage ID and Service ID are required' });
  }
  try {
    const reviews = await Review.find({ garage: garageId, service: serviceId })
      .sort({ createdAt: -1 }).limit(5).select('rating comment source createdAt reviewedBy').lean();
    const customerReviews =reviews.filter((r) => r.source === "customer").map( (r) => ({
      rating:r.rating,
      comment:r.comment,
      createdAt:r.createdAt,
      reviewedBy:r.reviewedBy || "Anonymous",
    }));
    const teamReviews =reviews.filter((r) => r.source === "team").map( (r) => ({
      rating: r.rating,
      comment: r.comment,
      createdAt:r.createdAt,
      reviewedBy:r.reviewedBy || "OGExpress Team",
    }))
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};