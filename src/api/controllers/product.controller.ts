import { Request, Response, NextFunction } from 'express';
import { Product, ProductInput } from '../models/product.model';


const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    const products = await Product.find().populate('category').sort('-createdAt').exec();
    return res.status(200).json({ data: products });
};

const getProduct = async (req: Request, res: Response) => {
    const { slug } = req.params;
    console.log(slug)
    const product = await Product.findOne({ slug: slug }).populate('category').exec();
 
    if (!product) {
      return res.status(404).json({ message: `Product with id "${slug}" not found.` });
    }
  
    return res.status(200).json({ data: product });
};


const addProduct = async (req: Request, res: Response) => {
    const { name, description, price, category, image } = req.body;

    if (!name || !description || !price || !category || !image) {
        return res.status(422).json({
            message: 'The fields name and description are required',
        });
    }
    const productInput: ProductInput = {
        name,
        description,
        price,
        category,
        image
      };
    
    const productCreated = Product.create(productInput);

    return res.status(201).json({ data: productCreated });

};

const setProduct = async (req: Request, res: Response) => {
    const { id, name, description, price, image } = req.body;
    //console.log(id);
    const product = await Product.findOne({ _id: id });

  
    if (!product) {
      return res.status(404).json({ message: `Product with id "${id}" not found.` });
    }

    if (!name || !description || !price) {
      return res.status(422).json({ message: 'The fields name and description are required' });
    }
  
    await Product.updateOne({ _id: id }, { name, description, price,image });
  

    const productUpdated = await Product.findById(id, { name, description, price,image });
  
    return res.status(200).json({ data: productUpdated });
};

// favorite 

const getFavProduct = async (req: Request, res: Response) => {
    let {username , email, password, firstname, lastname } = req.body;
};

const addFavProduct = async (req: Request, res: Response) => {
    let {username , email, password, firstname, lastname } = req.body;
};

const deleteFavProduct = async (req: Request, res: Response) => {
    let {username , email, password, firstname, lastname } = req.body;
    if (username && password && email && firstname && lastname){
  
    }
    else{
        res.send({message: 'Please enter Username and Password' });
        return;
    }
 
};

export default { getProducts, getProduct, addProduct, setProduct, getFavProduct, addFavProduct, deleteFavProduct  };