import exprees from 'express';
import ProductController from '../productController/product.controller.js';

const router = exprees.Router();

const productController = new ProductController();

// Create a new product
router.post('/create', (req , res) =>{
    productController.createProduct(req , res);
});

// List all products
router.get('/', (req , res) =>{
    productController.listProducts(req , res);
});

// Delete a product by ID
router.delete('/:id', (req , res) =>{
    productController.deleteProduct(req , res);
});

// Update quantity of a product by ID
router.post('/:id/update_quantity', (req , res) =>{
    productController.updateQuantity(req , res);
});

router.put('/:id/update', (req , res) =>{
    productController.updateQuantity(req , res);
});

export default router;
