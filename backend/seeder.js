import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/productModel.js";
import products from "./data/products.js";
import connectDB from "./config/db.js";

dotenv.config();
await connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
