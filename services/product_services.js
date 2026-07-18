import Product_model from '../models/product.js';

export const addProduct = async (data) => {
    return await Product_model.create(data);
};

export const allProducts = async () => {
    return await Product_model.find({}).select("-__v").sort({ price: -1});
};

export const getProductId = async (id) => {
    return await Product_model.findById(id);
};

export const getProductName = async (product_name) => {
    return await Product_model.findOne({ name: product_name });
};

export const updateProduct = async (id, data) => {
    return await Product_model.findByIdAndUpdate(
        id,
        data,
        { returnDocument: 'after', runValidators: true }
    )
};

export const deleteProduct = async (id) => {
    return await Product_model.findByIdAndDelete(id);
}