import mongoose from 'mongoose';
mongoose.Promise = global.Promise;



import { Product } from "./product.model";
import { Category } from "./category.model";
import { Slider } from "./slider.model";
import { User } from "./user.model";
import { Favorite } from "./favorite.model";


const db = {
  mongoose: mongoose,
  product: Product,
  category: Category,
  slider: Slider,
  favorite: Favorite,
  user: User,
};

export default db;