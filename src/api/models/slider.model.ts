import mongoose, { Schema, Model, Document } from 'mongoose';

type SliderDocument = Document & {
    image: string;
    product: string;
  };
  
type SliderInput = {
    image: SliderDocument['image'];
    product: SliderDocument['product'];
};

const SlidersSchema = new Schema(
    {
      image: {
        type: Schema.Types.String,
        required: true,
        //unique: true,
      },
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
        index: true,
      },
    },
    {
      collection: 'Sliders',
      timestamps: true,
    },
);

const Slider: Model<SliderDocument> = mongoose.model<SliderDocument>('Slider', SlidersSchema);

export { Slider, SliderInput, SliderDocument };