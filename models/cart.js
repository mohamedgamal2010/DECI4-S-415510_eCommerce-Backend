import mongoose from "mongoose";
import mongooseSanitizer from 'mongoose-sanitize';

const orderSchema = new mongoose.Schema({
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
  },
  {
    // Automatically manages createdAt and updatedAt fields
    timestamps: true,
  }
);
orderSchema.plugin(mongooseSanitizer);

const Order_model = mongoose.model("Order", orderSchema);

export default Order_model;