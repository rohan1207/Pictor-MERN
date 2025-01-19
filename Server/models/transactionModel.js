import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId for referencing users
    ref: "User", // Reference the user model
    required: true,
  },
  plan: {
    type: String,
    required: true,
    enum: ["Basic", "Advanced", "Business"], // Valid plans
  },
  amount: {
    type: Number,
    required: true,
    min: 0, // Ensure amount is not negative
  },
  credits: {
    type: Number,
    required: true,
    min: 0, // Ensure credits are not negative
  },
  payment: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now, // Default to the current date and time
  },
});

// Create or reuse the existing model
const transactionModel =
  mongoose.models.transaction || mongoose.model("transaction", transactionSchema);

export default transactionModel;
