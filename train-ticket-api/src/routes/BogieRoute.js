const express = require('express');
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const verifyAdmin = require("../middlewares/verifyAdmin")
const BogieController = require("../controllers/Bogie/BogieController");

const router = express.Router();



router.post("/create-bogie/:classId", BogieController.CreateBogie)
router.get("/get-all-bogies",BogieController.GetAllBogies);
router.get("/get-bogie/:id",BogieController.GetBogie);
router.patch("/booking-seat/:seatId", BogieController.BookingSeat);



module.exports=router;