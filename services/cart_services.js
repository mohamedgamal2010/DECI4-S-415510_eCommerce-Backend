import Order_model from '../models/cart.js';
import AppError from '../error_handler/appError.js';

export const allCarts = async () => {
    return await Order_model.find({}).populate("items.product", "name price category").select("-__v");
}

export const createCart = async (data) => {
    return await Order_model.create(data);
};

export const findCart = async (id) => {
    return await Order_model.findById(id).populate("items.product");
};

export const AddItem = async (id, itemData) => {
    const cart = await Order_model.findById(id);

    if (!cart) {
        const error = new AppError("Cart not found", 404);
        throw error;
    }

    const existingItemIndex = cart.items.findIndex(
        (item) => item.product.toString() === itemData.product.toString()
    )

    if (existingItemIndex > -1) {
        cart.items[existingItemIndex].quantity += itemData.quantity;
    } else {
        cart.items.push(itemData);
    }

    await cart.save();

    return await cart.populate("items.product");
};
