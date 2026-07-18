import { allCarts, createCart, findCart, AddItem} from '../services/cart_services.js';
import AppError from "../error_handler/appError.js";
import sendSuccess from "../utils/res_success.js";
import mongooseSanitizer from 'mongoose-sanitize';

const getAllCarts = async (req, res, next) => {
    try {
        const carts = await allCarts();
        sendSuccess(res, 201, carts);
    } catch (error) {
        next(error);
    }
}
const addNewCart = async (req, res, next) => {
    try {
        const data = req.body;
        const newCart = await createCart(data);
        sendSuccess(res, 201, data);
    } catch (error) {
        next(error);
    }
};

const getCartById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const cart = await findCart(id);
        if (!cart) {
            return next(new AppError("the cart not found", 404));
        } 
        sendSuccess(res, 200, cart);
    } catch (error) {
        next(error);
    }
}

const addNewItemInCart = async (req, res, next) => {
    try {
        // import cart ID and item data
        const cartId = req.params.id;
        const itemData = req.body;

        // update the cart
        const updatedCart = await AddItem(cartId, itemData);

        sendSuccess(res, 200, updatedCart);
    } catch (error) {
        next(error);
    }
}

export default {
    getAllCarts,
    addNewCart,
    getCartById,
    addNewItemInCart
}