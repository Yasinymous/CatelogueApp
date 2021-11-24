var jwt = require("jsonwebtoken");

import { Request, Response, NextFunction } from 'express';

import { User } from '../models/user.model';


const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers['authorization'];

    //check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        //split the space at the bearer
        const bearer = bearerHeader.split(' ');
        //Get token from string
        const bearerToken = bearer[1];

        //set the token

        jwt.verify(bearerToken,'supersecret',async (err:any)=>{
            if(err)
                res.sendStatus(403);
            else{       
                let userToken = await User.findOne({ token: bearerToken });
                    
                if (!userToken) {
                    return res.status(404).json({ message: `userToken with token "${bearerToken}" not found.` });         
                }
                // @ts-ignore
                req.userToken = bearerToken;
                next();
            }
        });   
        //next middleweare

    }else{
        //Fobidden
        res.sendStatus(403);
    }
};


export default {verifyToken};