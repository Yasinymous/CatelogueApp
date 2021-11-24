import express from 'express';
import controller from '../controllers/product.controller';

const router = express.Router();

// TODO FAVORITE PRODUCT MONGOMODEL AND ROUTER

router.get("/get/all", controller.getProducts);

router.get("/get/:slug", controller.getProduct);

router.post("/add", controller.addProduct);

router.put("/set", controller.setProduct);


export = router;


