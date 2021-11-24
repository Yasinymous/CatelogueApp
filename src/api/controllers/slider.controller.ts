
import { Request, Response, NextFunction } from 'express';

import { Slider, SliderInput } from '../models/slider.model';

const getSlider = async (req: Request, res: Response) => {
    const sliders = await Slider.find().populate('product').sort('-createdAt').exec();
    return res.status(200).json({ data: sliders });
};

const getSliderItem = async (req: Request, res: Response) => {
    let {username , email, password, firstname, lastname } = req.body;
};

const addSlider = async (req: Request, res: Response) => {
    let { image, product } = req.body;

    if (!image || !product) {
        return res.status(422).json({
            message: 'The fields name and description are required',
        });
    }
    const sliderInput: SliderInput = {
        image,
        product,
      };
    
    const sliderCreated = Slider.create(sliderInput);

    return res.status(201).json({ data: sliderCreated });

};

const setSlider = async (req: Request, res: Response) => {
    
};

const setSliderItem = async (req: Request, res: Response) => {
    let { id, image, productId } = req.body;

    const sliderItem = await Slider.findOne({ _id: id });

  
    if (!sliderItem) {
      return res.status(404).json({ message: `Product with id "${id}" not found.` });
    }

    if (!image || !productId || !id) {
      return res.status(422).json({ message: 'The fields name and description are required' });
    }
  
    await Slider.updateOne({ _id: id }, { image, productId });
  

    const sliderUpdated = await Slider.findById(id, { image, productId });
  
    return res.status(200).json({ data: sliderUpdated });
};

const deleteSliderItem = async (req: Request, res: Response) => {
    let { id,} = req.body;
    try {
        const sliderItem = await Slider.findByIdAndDelete({ _id: id });
        console.log(sliderItem);
        return res.status(200).json({ data: 'ok' });
    }   
    catch (error) {
        return res.status(500).json({ message: error });
    }
};



export default { getSlider, getSliderItem, addSlider, setSlider, setSliderItem, deleteSliderItem };