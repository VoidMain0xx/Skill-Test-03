import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, default: 0 },
});

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;
