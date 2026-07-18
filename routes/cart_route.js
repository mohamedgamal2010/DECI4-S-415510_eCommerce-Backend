import express from "express";
import cartController from "../controllers/cart_controller.js";

const cartRouter = express.Router();

cartRouter.post("/", cartController.addNewCart);
cartRouter.get("/", cartController.getAllCarts);
cartRouter.get("/:id", cartController.getCartById);
cartRouter.post("/:id/items", cartController.addNewItemInCart)


export default cartRouter;