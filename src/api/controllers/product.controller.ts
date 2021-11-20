//const model = require("../models");
//const sql = require('mssql');
//const User = model.user;

//const config = require("../config/auth.config");
//const Transport = require("../helpers/email.helpers");
//const db = require("../models");
//const User = db.users;
//const UserProfile = db.usersProfile;
//const Token = db.tokens;
//const Op = db.Sequelize.Op;

//var jwt = require("jsonwebtoken");
//var bcrypt = require("bcryptjs");
import { Request, Response, NextFunction } from 'express';
import { Product, ProductInput } from '../models/product.model';


const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    const products = await Product.find().populate('category').sort('-createdAt').exec();
    return res.status(200).json({ data: products });
};

const getProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { slug } = req.params;
    console.log(slug)
    const product = await Product.findOne({ slug: slug }).populate('category').exec();
 
    if (!product) {
      return res.status(404).json({ message: `Product with id "${slug}" not found.` });
    }
  
    return res.status(200).json({ data: product });
};

const getFavProduct = async (req: Request, res: Response, next: NextFunction) => {
    let {username , email, password, firstname, lastname } = req.body;
};

const addProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { name, description, price, category } = req.body;

    if (!name || !description || !price || !category) {
        return res.status(422).json({
            message: 'The fields name and description are required',
        });
    }
    const productInput: ProductInput = {
        name,
        description,
        price,
        category
      };
    
    const productCreated = Product.create(productInput);

    return res.status(201).json({ data: productCreated });

};

const setProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { id, name, description, price } = req.body;
    //console.log(id);
    const product = await Product.findOne({ _id: id });

  
    if (!product) {
      return res.status(404).json({ message: `Product with id "${id}" not found.` });
    }

    if (!name || !description || !price) {
      return res.status(422).json({ message: 'The fields name and description are required' });
    }
  
    await Product.updateOne({ _id: id }, { name, description, price });
  

    const productUpdated = await Product.findById(id, { name, description, price });
  
    return res.status(200).json({ data: productUpdated });
};

const setFavProduct = async (req: Request, res: Response, next: NextFunction) => {
    let {username , email, password, firstname, lastname } = req.body;
    if (username && password && email && firstname && lastname){
  
    }
    else{
        res.send({message: 'Please enter Username and Password' });
        return;
    }
 
};

export default { getProducts, getProduct, getFavProduct, addProduct, setProduct, setFavProduct };