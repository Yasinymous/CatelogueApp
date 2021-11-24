import { Request, Response, NextFunction } from 'express';

import { User } from '../models/user.model';

const checkDuplicateEmail = async (req: Request, res: Response, next: NextFunction) => {
    let {email} = req.body;
    // Email
    let user = await User.findOne({ where: { email: email } });
    if (user === null) {
    console.log('Not found!');
    } else {
    res.status(400).send({ message: "Failed! Email is already in use!" });
    return
    }
    next();
};


export default {checkDuplicateEmail};