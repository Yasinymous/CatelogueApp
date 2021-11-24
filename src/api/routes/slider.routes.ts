import express from 'express';
import controller from '../controllers/slider.controller';
//const { verifyUserForm, authJwt } = require("../middlewares/index");

const router = express.Router();

router.get("/get/slider", controller.getSlider);

router.get("/get/slider/item/:id", controller.getSliderItem);

router.post("/add/slider/item", controller.addSlider);

router.post("/set/slider/item", controller.setSliderItem);

router.delete("/delete/slider/item", controller.deleteSliderItem);


//router.post("/set/product", [authJwt.verifyToken], controller.setProduct);

export = router;


