import mongoose, { Schema, Model, Document } from 'mongoose';

const slug = require('mongoose-slug-generator');
const slugUpdate = require('mongoose-slug-updater');
mongoose.plugin(slug);
mongoose.plugin(slugUpdate);

// TODO FAVORITE PRODUCT MONGOMODEL AND ROUTER

type ProductDocument = Document & {
    name: string;
    description: string;
    price: number;
    isFavorite: boolean;
    category: string;
  };
  
  type ProductInput = {
    name: ProductDocument['name'];
    description: ProductDocument['description'];
    price: ProductDocument['price'];
    category: ProductDocument['category'];
    //isFavorite: ProductDocument['isFavorite'];
  };
  
  const ProductsSchema = new Schema(
    {
      name: {
        type: Schema.Types.String,
        required: true,
        unique: true,
      },
      description: {
        type: Schema.Types.String,
        required: true,
      },
      price: {
        type: Schema.Types.Number,
        default: 0,
      },
      isFavorite: {
        type: Schema.Types.Boolean,
        default: false,
      },
      slug: { 
        type: String,
        slug: "name",
        unique: true,
      },
      category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
        index: true,
      },
    },
    {
      collection: 'Products',
      timestamps: true,
    },
  );
  
  const Product: Model<ProductDocument> = mongoose.model<ProductDocument>('Product', ProductsSchema);
  
  export { Product, ProductInput, ProductDocument };