import { addProduct, allProducts, getProductId, getProductName, updateProduct, deleteProduct } from '../services/product_services.js';
import AppError from "../error_handler/appError.js";
import sendSuccess from "../utils/res_success.js";

const getAllProducts = async (req, res, next) => {
    try {
        const products = await allProducts();
        sendSuccess(res, 200, products);
    } catch (error) {
        next(error);
    }
};

const addNewProduct = async (req, res, next) => {
    try {
        const data = req.body;
        const newProduct = await addProduct(data);
        sendSuccess(res, 201, newProduct)
    } catch (error) {
        next(error);
    }
};

const getProductByName = async (req, res, next) => {
    try {
        const productName = req.params.name;
        const product = await getProductName(productName);
        if (!product) {
            return next(new AppError(`No product found with the name: ${productName}`, 404));
        }
        sendSuccess(res, 200, product);
    } catch (error) {
        next(error);
    }
};

const getProductById = async (req, res, next) => {
    try {
        const productID = req.params.id;
        const product = await getProductId(productID);
        if (!product) {
            return next(new AppError("the product not found", 404));
        }
        sendSuccess(res, 200, product);
    } catch (error) {
        next(error);
    }
};

const updateProductById = async (req, res, next) => {
    try {
        const productID = req.params.id;
        const productData = req.body;
        const updatedProduct = await updateProduct(productID, productData);

        if (!updatedProduct) {
            return next(new AppError("No product found with that ID", 404));
        }

        sendSuccess(res, 200, updatedProduct);
    } catch (error) {
        next(error);
    }
}

const deleteProductById = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await deleteProduct(productId);
        if (!deletedProduct) {
            return next(new AppError("No product found with that ID", 404));
        }
        sendSuccess(res, 200, `deleted product: ${deletedProduct}`);
    } catch (error) {
        next(error);
    }
};

export default {
    getAllProducts,
    addNewProduct,
    getProductByName,
    getProductById,
    updateProductById,
    deleteProductById
}