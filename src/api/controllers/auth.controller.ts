
//const config = require("../config/auth.config");


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
import { Request, Response } from 'express';
import { User, UserInput } from '../models/user.model';


const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ message: 'The fields name and description are required' });
      }

    const user = await User.findOne({ email: email });
    
    if (!user) {
      return res.status(404).json({ message: `User with email "${email}" not found.` });
    }

    let passwordIsValid = bcrypt.compareSync(
        password,
        user.password
    );
    
    if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
    }
       

    let token = jwt.sign({ id: user._id }, 'supersecret', {
        expiresIn: 86400 // 24 hours
    });

    await User.updateOne({ _id: user._id }, { token });
  
    
    const userUpdated = await User.findById(user._id, { email, fullName: user.fullName, token });
  
    return res.status(200).json({ data: userUpdated });
};

const signUp = async (req: Request, res: Response) => {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
        return res.status(422).json({
            message: 'The fields name and description are required',
        });
    }
    const userInput: UserInput = {
        fullName,
        email,
        password: bcrypt.hashSync(password, 8),
      };
    
    const UserCreated = User.create(userInput);

    return res.status(201).json({ data: UserCreated });
};

const signOut = async (req: Request, res: Response) => {
    
    // @ts-ignore
    const token = req.userToken;

    const userToken = jwt.decode(token);

    const user = await User.findOne({ _id: userToken.id });
    
    if (!user) {
      return res.status(404).json({ message: `User with userToken "${userToken}" not found.` });
    }

    await User.updateOne({ _id: user._id }, { token: '' });
  
    return res.status(200).json({ message: 'SIGNOUT SUCCES'});
};





export default { signIn, signUp, signOut };