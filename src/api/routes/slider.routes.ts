import express from 'express';
import controller from '../controllers/slider.controller';
//const { verifyUserForm, authJwt } = require("../middlewares/index");

const router = express.Router();

router.get("/get/slider/all", controller.getSliders);

router.get("/get/slider",  controller.getSlider);

router.post("/add/slider", controller.addSlider);

router.post("/set/slider", controller.setSlider);


//router.post("/set/product", [authJwt.verifyToken], controller.setProduct);

export = router;


