import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import ConnectDB from './db/db.js';
import Order_model from './models/cart.js';
import Product_model from './models/product.js';
import sampleProducts from './sampleData.js';

const seedDatabase = async () => {
  try {
    // Connect to the database
    await ConnectDB();
    console.log("Database connected successfully.");

    // Clearing  any existing test data to start fresh
    await Order_model.deleteMany();
    await Product_model.deleteMany();
    console.log("Existing database records cleared.");

    // Insert the sample records (Products first, since Orders rely on them)
    const insertedProducts = await Product_model.insertMany(sampleProducts);
    console.log(`${insertedProducts.length} sample products inserted.`);

    // Create a sample order using ObjectIds from the newly inserted products
    if (insertedProducts.length >= 2) {
      const sampleOrder = [
        {
          items: [
            { product: insertedProducts[0]._id, quantity: 2 },
            { product: insertedProducts[1]._id, quantity: 1 },
          ],
        },
      ];
      
      await Order_model.insertMany(sampleOrder);
      console.log("Sample order inserted.");
    }

    console.log("Seeding completed successfully!");

    // Close the connection and exit the script
    process.exit(0);
    
  } catch (error) {
    console.error("Error seeding the database:", error);
    process.exit(1);
  }
};

// seeding function
seedDatabase();