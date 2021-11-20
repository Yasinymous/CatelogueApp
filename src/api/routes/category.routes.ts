import express from 'express';
import controller from '../controllers/category.controller';
//const { verifyUserForm, authJwt } = require("../middlewares/index");

const router = express.Router();

router.get("/get/category/all", controller.getCategories);

router.get("/get/category/:id",  controller.getCategory);

router.get("/get/category/:slug/product",  controller.getCategoryProducts);

router.post("/add/category", controller.addCategory);

router.post("/set/category", controller.setCategory);

//router.post("/set/product", [authJwt.verifyToken], controller.setProduct);

export = router;


