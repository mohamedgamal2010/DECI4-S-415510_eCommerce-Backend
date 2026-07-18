import mongoose from "mongoose";
import mongooseSanitizer from 'mongoose-sanitize';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product title is required"],
    unique: true
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be a negative number!"],
  },
  description: {type: String, required: true},
  category: {type: String, required: true},
  inStock: {type: Boolean, default: true},
  image: {type: String, required: true}
});

productSchema.plugin(mongooseSanitizer);

const Product_model = mongoose.model("Product", productSchema);
export default Product_model;