import express from 'express';
import controller from '../controllers/auth.controller';
import favController from '../controllers/fav.controller';
import { authJwt, verifySignUp } from '../middlewares';

const router = express.Router();

router.post("/sign/in", controller.signIn);

router.post("/sign/up", [verifySignUp.checkDuplicateEmail], controller.signUp);

router.post("/sign/out",  [authJwt.verifyToken], controller.signOut);

// favorite

router.get("/get/all/favorite", [authJwt.verifyToken], favController.getAllFavProduct);

router.get("/get/favorite", [authJwt.verifyToken], favController.getFavProduct);

router.post("/add/favorite", [authJwt.verifyToken], favController.addFavProduct);

router.delete("/delete/favorite", [authJwt.verifyToken], favController.deleteFavProduct);


export = router;


