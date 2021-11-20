import mongoose, { Schema, Model, Document } from 'mongoose';

const slug = require('mongoose-slug-generator');
const slugUpdate = require('mongoose-slug-updater');
mongoose.plugin(slug);
mongoose.plugin(slugUpdate);

type CategoryDocument = Document & {
    name: string;
  };
  
  type CategoryInput = {
    name: CategoryDocument['name'];
  };
  
  const CategoriesSchema = new Schema(
    {
      name: {
        type: Schema.Types.String,
        required: true,
        unique: true,
      },
      slug: { 
        type: String,
        slug: "name",
        unique: true,
      },
    },
    {
      collection: 'Categories',
      timestamps: true,
    },
  );
  
  const Category: Model<CategoryDocument> = mongoose.model<CategoryDocument>('Category', CategoriesSchema);
  
  export { Category, CategoryInput, CategoryDocument };