import ProductModel from "../productModel/product.Schema.js";
import productRepository from "../productModel/product.Repository.js";
import { ObjectId } from "mongodb";

export default class ProductController{

    constructor(){
        this.productRepository = new productRepository();
    }

// Create a new product
async createProduct  (req, res) {
  try {
    const { name, quantity } = req.body;
    console.log(req.body);
    const productModel = new ProductModel({name , quantity});
    const createdpost = await this.productRepository.add(productModel);
    res.json({ productModel });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
    console.log(req.body);
  }
}

// List all products
async listProducts  (req, res)  {
  try {
    const products = await this.productRepository.getAll();
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a product by ID
async deleteProduct (req, res) {
  try {
    const { id } = req.params;
    await this.productRepository.delete(id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update quantity of a product by ID
async updateQuantity (req, res) {
    try {
      const { id } = req.params;
      const { number } = req.query;
  
      // Find the product by ID
      const product = await ProductModel.findById( new ObjectId(id));
  
      // If the product is not found, return a 404 response
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Update the quantity based on the provided number
      product.quantity += parseInt(number, 10);
  
      // Save the updated product
      await ProductModel.save();
  
      // Return a response with the updated product and a success message
      res.json({ product , message: 'Updated successfully' });
    } catch (error) {
      // Handle errors and return a 500 response with the error message
      res.status(500).json({ error: error.message });
    }
  };


  async updateOnceMore(req , res){
    try {

        const { id } = req.params;
      const { number } = req.query;
  
      // Find the product by ID
      const product = await this.findById(id);

      if(!product){
        return res.status(404).json({ message: 'Product not found' });
      }else{
        const result = await this.productRepository.update(id , number);
        res.json({ product , message: 'Updated successfully' });
      }
        
    } catch (error) {
         // Handle errors and return a 500 response with the error message
      res.status(500).json({ error: error.message });
    }
  }
}