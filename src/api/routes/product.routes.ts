import express from 'express';
import controller from '../controllers/product.controller';
//const { verifyUserForm, authJwt } = require("../middlewares/index");

const router = express.Router();

// TODO FAVORITE PRODUCT MONGOMODEL AND ROUTER

router.get("/get/product/all", controller.getProducts);

router.get("/get/product/:slug", controller.getProduct);

router.get("/get/product/favorite", controller.getFavProduct);

router.post("/add/product", controller.addProduct);

router.put("/set/product", controller.setProduct);

router.post("/set/product/favorite", controller.setFavProduct);

//router.post("/set/product", [authJwt.verifyToken], controller.setProduct);

export = router;


