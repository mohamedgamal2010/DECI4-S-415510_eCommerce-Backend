import express from "express";
import productController from "../controllers/product_controller.js";


const productRouter = express.Router();

productRouter.post("/", productController.addNewProduct); // creating new product in database
productRouter.get("/", productController.getAllProducts); // get all products from data base
productRouter.get("/name/:name", productController.getProductByName); // get the product by its name
productRouter.get("/:id", productController.getProductById); // get the product by its id
productRouter.patch("/:id", productController.updateProductById); // update the product
productRouter.delete("/:id", productController.deleteProductById); // delete the product

export default productRouter;