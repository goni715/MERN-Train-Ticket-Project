const express = require('express');
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const VaraController = require("../controllers/Vara/VaraController");
const verifyAdmin = require("../middlewares/verifyAdmin")

const router = express.Router();



router.post("/create-vara", VaraController.CreateVara)
router.get("/get-vara-by-train/:trainId",VaraController.GetVaraByTrain);
//router.get("/search-train/:from/:to",TrainController.SearchTrain);



module.exports=router;