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
import { Category, CategoryInput } from '../models/category.model';
import { Product } from '../models/product.model';


const getCategories = async (req: Request, res: Response, next: NextFunction) => {
    const Categories = await Category.find().sort('-createdAt').exec();
    return res.status(200).json({ data: Categories });
};

const getCategory = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const category = await Category.findOne({ _id: id });
 
    if (!category) {
      return res.status(404).json({ message: `Category with id "${id}" not found.` });
    }
  
    return res.status(200).json({ data: category });
};

const getCategoryProducts = async (req: Request, res: Response, next: NextFunction) => {
    const { slug } = req.params;

    const category = await Category.findOne({ slug: slug });
    
    if (!category) {
        return res.status(404).json({ message: `Category with id "${slug}" not found.` });
      }

    const product = await Product.find({ category: category._id }).populate('category').exec();
    if (!product) {
      return res.status(404).json({ message: `Product with id "${slug}" not found.` });
    }
  
    return res.status(200).json({ data: product });
};

const addCategory = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;

    if (!name) {
        return res.status(422).json({
            message: 'The fields name and description are required',
        });
    }
    const CategoryInput: CategoryInput = {
        name
      };
    
    const CategoryCreated = Category.create(CategoryInput);

    return res.status(201).json({ data: CategoryCreated });
};

const setCategory = async (req: Request, res: Response, next: NextFunction) => {
    const { id, name } = req.body;
    //console.log(id);
    const category = await Category.findOne({ _id: id });

  
    if (!category) {
      return res.status(404).json({ message: `Category with id "${id}" not found.` });
    }

    if (!name) {
      return res.status(422).json({ message: 'The fields name and description are required' });
    }
  
    await Category.updateOne({ _id: id }, { name });
  

    const categoryUpdated = await Category.findById(id, { name });
  
    return res.status(200).json({ data: categoryUpdated });
};


export default { getCategories, getCategory, getCategoryProducts, addCategory, setCategory };