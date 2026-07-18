import express from 'express';
import ConnectDB from './db/db.js';
import { config_project } from './config/config.js';
import productRouter from './routes/product_route.js';
import cartRouter from './routes/cart_route.js';
import errorHandlerMiddleware from './error_handler/error_handler.js';
import helmet from 'helmet';


const app = express();

// middlewares of the server
app.use(express.json());
app.use(helmet());

// connect to the database
ConnectDB();

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

app.use(errorHandlerMiddleware.checkUrl);
app.use(errorHandlerMiddleware.errorHandler);

// running the server
app.listen(config_project.port, () => {
    console.log(`the server running on port ${config_project.port}`);
});