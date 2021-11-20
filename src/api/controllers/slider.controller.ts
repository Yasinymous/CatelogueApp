
import { Request, Response, NextFunction } from 'express';

const getSliders = async (req: Request, res: Response, next: NextFunction) => {
    let {username , email, password, firstname, lastname } = req.body;
 
};
const getSlider = async (req: Request, res: Response, next: NextFunction) => {
    let {username , email, password, firstname, lastname } = req.body;
   
 
};
const addSlider = async (req: Request, res: Response, next: NextFunction) => {
    let {username , email, password, firstname, lastname } = req.body;
};
const setSlider = async (req: Request, res: Response, next: NextFunction) => {
    let {username , email, password, firstname, lastname } = req.body;
    if (username && password && email && firstname && lastname){
  
    }
    else{
        res.send({message: 'Please enter Username and Password' });
        return;
    }
 
};


export default { getSliders, getSlider, addSlider, setSlider };