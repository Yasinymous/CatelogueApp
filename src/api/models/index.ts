import mongoose from 'mongoose';
mongoose.Promise = global.Promise;



import { Product } from "./product.model";
import { Category } from "./category.model";


const db = {
  mongoose: mongoose,
  product: Product,
  category: Category,
};

export default db;