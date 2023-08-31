const express = require('express');
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const TrainController = require("../controllers/Train/TrainController");
const verifyAdmin = require("../middlewares/verifyAdmin")

const router = express.Router();



router.post("/create-train", TrainController.CreateTrain)
router.get("/get-train/:id",TrainController.GetTrain);
router.get("/get-all-trains",TrainController.GetAllTrains);
router.get("/search-train/:from/:to/:date",TrainController.SearchTrain);



module.exports=router;