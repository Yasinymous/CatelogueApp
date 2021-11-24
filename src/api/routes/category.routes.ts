import express from 'express';
import controller from '../controllers/category.controller';
//const { verifyUserForm, authJwt } = require("../middlewares/index");

const router = express.Router();

router.get("/get/all", controller.getCategories);

router.get("/get/:id",  controller.getCategory);

router.get("/get/product/:slug",  controller.getCategoryProducts);

router.post("/add", controller.addCategory);

router.put("/set", controller.setCategory);

//router.post("/set/product", [authJwt.verifyToken], controller.setProduct);

export = router;


