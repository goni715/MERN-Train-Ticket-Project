const express = require('express');
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const ClassController = require("../controllers/Class/ClassController");
const verifyAdmin = require("../middlewares/verifyAdmin")

const router = express.Router();



router.post("/create-class/:trainId", ClassController.CreateClass)
router.get("/get-class/:id/:from/:to/:date",ClassController.GetClass);
router.get("/get-all-classes",ClassController.GetAllClasses);



module.exports=router;