
import { Request, Response, NextFunction } from 'express';
import { Favorite, FavoriteInput } from '../models/favorite.model';

var jwt = require("jsonwebtoken");

const getAllFavProduct = async (req: Request, res: Response) => {
    // @ts-ignore
    const token = req.userToken;

    const userToken = jwt.decode(token);

    const favorite = await Favorite.find({ user: userToken.id }).populate('product').exec();
    
    if (!favorite) {
        return res.status(404).json({ message: `Category with id "${userToken}" not found.` });
    }
  
    return res.status(200).json({ data: favorite });

};

const getFavProduct = async (req: Request, res: Response) => {
    let {username , email, password, firstname, lastname } = req.body;
};

const addFavProduct = async (req: Request, res: Response) => {
    const { product } = req.body;

    // @ts-ignore
    const token = req.userToken;

    const userToken = jwt.decode(token);

    if (!product) {
        return res.status(422).json({
            message: 'The fields name and description are required',
        });
    }
    const favoriteInput: FavoriteInput = {
        user:userToken.id,
        product
      };
    
    const favoriteCreated = Favorite.create(favoriteInput);

    return res.status(201).json({ data: favoriteCreated });

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

export default { getAllFavProduct, getFavProduct, addFavProduct, deleteFavProduct  };