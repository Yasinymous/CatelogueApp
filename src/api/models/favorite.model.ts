import mongoose, { Schema, Model, Document } from 'mongoose';

type FavoriteDocument = Document & {
    user: string;
    product: string;
};

type FavoriteInput = {
    user: FavoriteDocument['user'];
    product: FavoriteDocument['product'];
};

const FavoritesSchema = new Schema(
  {
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
        index: true,
    },
  },
  {
    collection: 'favorites',
    timestamps: true,
  },
);

const Favorite: Model<FavoriteDocument> = mongoose.model<FavoriteDocument>('Favorite', FavoritesSchema);

export { Favorite, FavoriteInput, FavoriteDocument };